# SAJ Member List Open Data

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This repository automatically scrapes the member list of the Software Association of Japan (SAJ), provides the data as a CSV file, and displays it on a simple, searchable web viewer.

## Data & Demo

- **[Live Viewer](https://code4fukui.github.io/opendata-SAJ/)**
- **[saj-memberlist.csv](saj-memberlist.csv)** (Raw Data File)

The data is sourced from [会員リスト | SAJ 一般社団法人ソフトウェア協会](https://www.saj.or.jp/M10/M1001AL).

## Features

- **Daily Updates**: The member list is automatically updated every day via a GitHub Actions workflow.
- **Open Data**: Member data is stored in the clean, accessible `saj-memberlist.csv` format.
- **Interactive Viewer**: The web application allows for easy sorting and filtering of the data by any column.

## Data Schema

The CSV file `saj-memberlist.csv` contains the following columns:

- `name`: 法人名 (Corporation Name)
- `pref`: 都道府県 (Prefecture)
- `url`: 法人URL (Corporate URL)
- `type`: 会員区分 (Membership Type)

## How to Update Manually

To run the scraping script locally, you will need [Deno](https://deno.land/) installed.

```bash
# Navigate to the source directory
cd src

# Run the scraper
deno run -A scrape.js
```

## Automation

A GitHub Actions workflow, defined in `.github/workflows/scheduled-fetch.yml`, runs daily at 22:28 UTC to fetch the latest data, commit any changes, and push them to the repository.

## License

MIT License