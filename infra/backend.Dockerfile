FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm i

COPY . /app/

# CMDは、環境別のcomposeファイルで各々指定する。
