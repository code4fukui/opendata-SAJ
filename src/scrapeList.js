import { fetchOrLoad, HTMLParser, CSV, nextTag, prevTag, table2json, table2csv, sleep } from "https://code4fukui.github.io/scrapeutil/scrapeutil.js";

const fn = "../saj-memberlist.csv";

const list = [];
for (let i = 0;; i += 20) {
  const url = "https://www.saj.or.jp/M10/M1001AL/corporate_name/asc/" + i;
  //const url = "https://www.saj.or.jp/M10/M1001AL";

  const html = await fetchOrLoad(url);
  const dom = HTMLParser.parse(html);

  const dls = dom.querySelectorAll(".table_list li dl");
  if (dls.length <= 1) break;
  for (let j = 1; j < dls.length; j++) {
    const dl = dls[j];
    const dtdd = dl.querySelectorAll("dt,dd");
    const item = {};
    for (let i = 0; i < dtdd.length; i += 2) {
      const name = dtdd[i].text.trim();
      const val = dtdd[i + 1].text.trim();
      //console.log(name, val);
      item[name] = val;
    }
    list.push({
      name: item.法人名,
      pref: item.都道府県,
      url: item.法人URL,
      type: item.会員区分,
    });
    console.log(list.length)
  }
  await sleep(200);
}

console.log(list, list.length)
await Deno.writeTextFile(fn, CSV.stringify(list));
