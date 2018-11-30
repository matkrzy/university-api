#!/usr/bin/make -f
cnf ?= config.env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

tag:= $(DOCKER_REGISTRY_USER)/$(IMAGE_NAME)

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

.PHONY: push
push:
	@docker login -u $(DOCKER_REGISRY_USER) -p $(DOCKER_REGISRY_USER_PASSWORD)
	docker push $(tag)
	
.PHONY: load-fixtures
load-fixtures:
	mongodb-fixtures unload -u mongodb://localhost:27017/bsc --path ./fixtures
	mongodb-fixtures load -u mongodb://localhost:27017/bsc --path ./fixtures
