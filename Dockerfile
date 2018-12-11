FROM node:10.8.0 as builder
ARG PORT
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn
COPY . ./

EXPOSE $PORT
CMD ["yarn","dev"]