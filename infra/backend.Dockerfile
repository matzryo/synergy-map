FROM node:18-alpine

# 必要なパッケージのインストール。例: graphql-codegen関連
RUN apk add --no-cache --update \
    python3 \
    build-base \
    libgcc \
    libstdc++ \
    libuv

WORKDIR /app

# 独自パッケージのインストールのためには、.npmrcにアクセストークンを設定する必要がある。
ARG NPM_TOKEN
COPY package.json package-lock.json .npmrc /app/
RUN npm i

COPY . /app/

# CMDは、環境別のcomposeファイルで各々指定する。
