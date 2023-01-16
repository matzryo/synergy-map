docker-composeコマンド

* dockerを起動する。

ローカル開発環境(コンテナをバックグラウンドで実行する場合はupの後に-dもしくは--detachをつける)
```bash
docker compose -f docker-compose.yml -f local.yml up
```

* dockerをダウンする。(コンテナをバックグラウンド実行した場合)

ローカル開発環境
```bash
docker compose -f docker-compose.yml -f local.yml down
```