import { HTMLParser, CSV, nextTag, prevTag, table2json, table2csv, sleep } from "https://code4fukui.github.io/scrapeutil/scrapeutil.js";

const list = await CSV.fetchJSON("../saj-memberlist0.csv");
const list2 = list.map(i => ({
  no: i.No,
  name: i["会社名"],
  kana: i["会社フリガナ▲1"],
  type: i["グループ名"].substring(1),
  url: i.URL,
}));
await Deno.writeTextFile("../saj-memberlist.csv", CSV.stringify(list2));
