build:
	grunt build
	docker build -t emrchaindocker/emrchain-node .

publish: build
	docker push emrchaindocker/emrchain-node


