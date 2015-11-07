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
var util = require('util')     ;

var coluSettings = {
	network: 'testnet',
	privateSeed: '5b5dc4509ff10a38b90916f23ab3fb50a534ddcb30f6cd003f8eb8ca09eb02af',
	redisHost: '159.122.238.144'
};

// init express
var app = express();
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

app.use(bodyParser.json())


// route index.html
app.get('/', function(req, res){
  res.sendfile( path.join( __dirname, '../app/index.html' ) );
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
	res.status(201).json({
		patient: {
			public_key: keyPair.getAddress(),
			private_key: keyPair.toWIF()
		}
	});
});

app.post('/record', function(req, res){
	console.log('Create Medical Record');

	var medicalRecord = {
		patientId : req.body.patientId,
		dateofBirth : req.body.dateofBirth,
		gender : req.body.gender
	};
	console.log(medicalRecord);

	var asset = {
    	amount: 1,
	    metadata: medicalRecord
	};

	colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err);

       res.status(201).json({
			record: { "assetId" : body.assetId }
		});
    });

});

app.get('/record', function(req, res){
	console.log('Get Medical Record by Asset Address');
	console.log(req.query);
	var asset = {
    	assetId: req.query.assetId
	};
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
