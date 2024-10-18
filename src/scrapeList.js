import { fetchOrLoad, HTMLParser, CSV, nextTag, prevTag, table2json, table2csv, sleep } from "https://code4fukui.github.io/scrapeutil/scrapeutil.js";
import { fetchList } from "./fetchList.js";

const fn = "../saj-memberlist0.csv";
const url = "https://archive.saj.or.jp/memberlist/all.html";

const html = await fetchOrLoad(url);
const dom = HTMLParser.parse(html);

const link = dom.querySelector(".content_main iframe").getAttribute("src");
console.log(link);

const list = await fetchList(link);
await Deno.writeTextFile(fn, CSV.stringify(list));
