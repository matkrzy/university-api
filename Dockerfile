FROM node:10.8.0 as builder
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn
COPY . ./

EXPOSE 80
CMD ["yarn","serve"];
