'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var baucis = require('baucis');
var Colu = require('colu');
var bitcoin = require('bitcoinjs-lib');
var bodyParser = require('body-parser');
var util = require('util');
var Redis = require('ioredis');

var ourServer = '159.122.238.144';

var coluSettings = {
	network: 'testnet',
	privateSeed: '5b5dc4509ff10a38b90916f23ab3fb50a534ddcb30f6cd003f8eb8ca09eb02af',
	redisHost: ourServer
};

// init express
var app = express();
var redis = new Redis(6379, ourServer);
var colu = new Colu(coluSettings);
app.use(bodyParser());


colu.on('connect', function () {
	var privateSeed = colu.hdwallet.getPrivateSeed();
	console.log("privateSeed: ", privateSeed)
});

app.configure(function(){
    app.set('port', process.env.PORT || 80);

    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../app/scripts/views');
});

// set logging
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// mount static
app.use(express.static( path.join( __dirname, '../app') ));
app.use(express.static( path.join( __dirname, '../.tmp') ));

app.use(bodyParser.json());


// route index.html
app.get('/', function(req, res){
  res.sendfile( path.join( __dirname, '../app/index.html' ) );
});

app.get('/patient/:patientAddress', function(req, res){
	colu.coloredCoins.getAddressInfo(req.params.patientAddress, function (err, body) {
		if (err) return console.error(err);
		
		// verify etc. res.status(200).json({});
        var records=[];
		
		//loop through patient records
		for(var i=0 ; i<body.utxos.length;i++){
	        for(var j=0 ; j<body.utxos[i].assets.length;j++){
	        	console.log(body.utxos[i].assets[j]);
	        	records.push(body.utxos[i].assets[j].assetId);
	        }
	    }

		res.status(200).json({
			records
		});
		
	});
});

app.post('/patient', function(req, res){
	console.log('Create Patient');
	var keyPair = bitcoin.ECPair.makeRandom();
	console.log('Created Patient Private Key', keyPair.toWIF());
	console.log('Created Patient Public Key', keyPair.getAddress());
	res.status(201).json({
		patient: {
			public_key: keyPair.getAddress(),
			private_key: keyPair.toWIF()
		}
	});
});

app.post('/doctor', function(req, res){
	console.log('Create Doctor');
	var keyPair = bitcoin.ECPair.makeRandom();
	console.log('Created Doctor Private Key', keyPair.toWIF());
	console.log('Created Doctor Public Key', keyPair.getAddress());
	redis.set(keyPair.toWIF(), keyPair.getAddress());
	res.status(201).json({
		patient: {
			public_key: keyPair.getAddress()
		}
	});
});

app.post('/record', function(req, res){
	console.log('Create Medical Record');

	var medicalRecord = {
		patientId : req.body.patientId,
		dateOfBirth : req.body.dateOfBirth,
		gender : req.body.gender
	};
	console.log(medicalRecord);

	var asset = {
    	amount: 1,
		reissueable: false,
	    metadata: medicalRecord
	};

	colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err);
        console.log(body.issueAddress);
        console.log(body.receivingAddresses);
       res.status(201).json({
			record: {
				"assetId" : body.assetId,
				"issueAddress" : body.issueAddress
			 }
		});
    });

});

app.put('/record', function(req, res){
	console.log('Transfer Medical Record');
	var toAddress = req.query.toAddress;
	var fromAddress = req.query.fromAddress;
	var args = {
	    from: [fromAddress],
	    to: [{
		        address: toAddress,
		        assetId: req.query.assetId,
		        amount: 1
		    }]
	}
	console.log(args);
	colu.sendAsset(args, function (err, body) {
        if (err) return console.error(err);
        console.log(body);
       res.status(201).json({
			record: { "txid" : body.txid }
		});
    });

});


app.get('/record', function(req, res){
	console.log('Get Medical Record by Asset Address');
	console.log(req.query);
	var asset = {
    	assetId: req.query.assetId
	};
	// TODO: Change to getAssetMetaData
    colu.coloredCoins.getAssetData(asset,function (err, body) {
        if (err) return console.error(err);
        console.log("AssetData: ",util.inspect(body, {depth:10}));
		res.status(201).json({
			record: {
				assetId : body.assetId,
				medicalRecord : body.assetData[0].metadata.metadataOfIssuence.data
			}
		});
    })
});


// start server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express App started!');
});


colu.init();
