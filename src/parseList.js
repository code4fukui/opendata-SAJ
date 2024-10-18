import { fetchOrLoad, HTMLParser, CSV, nextTag, prevTag, table2json, table2csv, sleep } from "https://code4fukui.github.io/scrapeutil/scrapeutil.js";

export const parseList = (dom) => {
  const tbl = dom.querySelector("table#list");
  const json = table2json(tbl, "会社名");
  return json;
};

/*
const html = await Deno.readTextFile("temp/page1.html");
const dom = HTMLParser.parse(html);
const list = parseList(dom);
console.log(list);
*/
