# synergy-map-backend

シナジーマップのバックエンド。GraphQL サーバーです。

## ローカル開発環境構築

### プライベートパッケージのインストール準備

本パッケージでは独自 NPM パッケージを作成、活用しています。パッケージのソースは `./libs/requests` です。
運用(`npm install`含む)するには、以下の準備が必要です。

#### トークンの作成

GitHub にて、[個人用アクセストークン(クラシック)を作成](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)してください。
トークンのスコープは`read:packages`のみで十分です。

#### 本リポジトリでのトークンの設定

```sh
cd ./infra
cp .env.sample .env
# .envのNPM_TOKENの値に取得したトークンを追記
```

#### (参考)GitHub Packages への認証

ローカル開発環境のホストマシン上でパッケージをインストール(`npm install`)したい場合は、上記ステップで作成したトークンを用い、以下の方法で
[個人用アクセストークンで GitHub Packages の認証](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token)を行う必要があります。

### コンテナ起動

```bash
cd ./backend
docker compose -f docker-compose.yml -f local.yml up
```
