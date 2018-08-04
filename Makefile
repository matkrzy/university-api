#!/usr/bin/make -f
cnf ?= config.env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

port:= 80
tag:= $(DOCKER_REGISRY_USER)/$(IMAGE_NAME)

.PHONY: build
build:
	docker build . -t "$(tag)"

.PHONY: run
run:
	docker run -d --name $(IMAGE_NAME) -p $(port):9090 $(tag)

.PHONY: start
start:
	docker start $(IMAGE_NAME)

.PHONY: stop
stop:
	docker stop $(IMAGE_NAME)

.PHONY: remove
remove:
	docker rm  $(IMAGE_NAME)

.PHONY: push
push:
	@docker login -u $(DOCKER_REGISRY_USER) -p $(DOCKER_REGISRY_USER_PASSWORD)
	docker push $(tag)
