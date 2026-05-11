# SAJ会員リスト オープンデータ

このリポジトリは、一般社団法人ソフトウェア協会（SAJ）の会員リストを自動的にスクレイピングし、データをCSVファイルとして提供するとともに、シンプルで検索可能なウェブビューアで表示します。

## データとデモ

- **[ライブビューア](https://code4fukui.github.io/opendata-SAJ/)**
- **[saj-memberlist.csv](saj-memberlist.csv)** (生データファイル)

データは[会員リスト | SAJ 一般社団法人ソフトウェア協会](https://www.saj.or.jp/M10/M1001AL)から取得しています。

## 特徴

- **毎日更新**: GitHub Actionsのワークフローにより、会員リストが毎日自動的に更新されます。
- **オープンデータ**: 会員データは、クリーンでアクセスしやすい `saj-memberlist.csv` 形式で保存されています。
- **インタラクティブビューア**: ウェブアプリケーションを使用して、任意の列でデータを簡単に並べ替えたりフィルタリングしたりできます。

## データスキーマ

CSVファイル `saj-memberlist.csv` には以下の列が含まれています:

- `name`: 法人名 (Corporation Name)
- `pref`: 都道府県 (Prefecture)
- `url`: 法人URL (Corporate URL)
- `type`: 会員区分 (Membership Type)

## 手動での更新方法

ローカルでスクレイピングスクリプトを実行するには、[Deno](https://deno.land/)をインストールする必要があります。

```bash
# ソースディレクトリに移動
cd src

# スクレイパーを実行
deno run -A scrape.js
```

## 自動化

`.github/workflows/scheduled-fetch.yml` で定義されているGitHub Actionsのワークフローが、毎日22:28 (UTC) に実行され、最新データの取得、変更のコミット、リポジトリへのプッシュを行います。

## ライセンス

MIT License
