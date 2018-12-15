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
