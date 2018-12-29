#!/usr/bin/make -f

env ?= .env
include $(env)
export $(shell sed 's/=.*//' $(env))


.PHONY: build
build:
	docker-compose build

.PHONY: run
run:
	docker-compose run

.PHONY: start
start:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose stop
	
.PHONY: down
down:
	docker-compose down
	
.PHONY: remove
remove:
	docker-compose rm -s

	
.PHONY: load-fixtures
load-fixtures:
	mongodb-fixtures unload -u mongodb://localhost:27017/$(TYPEORM_DATABASE) --path $(FIXTURES_PATH)
	mongodb-fixtures load -u mongodb://localhost:27017/$(TYPEORM_DATABASE) --path $(FIXTURES_PATH)

export-database:
	docker exec mongo mongo --quiet $(TYPEORM_DATABASE) --eval 'printjson( db.process.find({},{"_id":0, "id": 1, "label":1,"nodes":1,"connections":1}).toArray() )' > $(EXPORT_PATH)/process.json
	docker exec mongo mongo --quiet $(TYPEORM_DATABASE) --eval 'printjson( db.product.find({},{"_id":0,"id":1,"label":1, "amount":1, "processId": 1}).toArray() )' > $(EXPORT_PATH)/product.json
	 