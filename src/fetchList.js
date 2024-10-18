import { HTMLParser, CSV, nextTag, prevTag, table2json, table2csv, sleep } from "https://code4fukui.github.io/scrapeutil/scrapeutil.js";
import { SJIS } from "https://js.sabae.cc/SJIS.js";
import { parseList } from "./parseList.js";

export const fetchList = async (url) => {
  const res = await fetch(url);
  console.log(res);
  const sjis = new Uint8Array(await res.arrayBuffer());
  const html = SJIS.decode(sjis);
  console.log(html);
  const cookie0 = res.headers.get("set-cookie");
  console.log(cookie0);
  const cookie = cookie0.substring(0, cookie0.indexOf(";"));

  const list = [];
  for (let page = 1;; page++) {
    const url = "https://coco.cococica.com/saj/nakama/list.asp";
    //const body = "page_no=34&top_g_id=csaj&cmd=searchNew&top_type_visible=0&top_type=1&contribution_flg=";
    const body = `top_type=1&top_sta=%93%8C%8B%9E%93s&incLower=0&search_select=&sort=0&order=asc&page=${page}&max=8&cmd=next&top_g_id=csaj&other_topgid=&page_no=34&search_mode=&top_type_visible=0&srchItem=&srchKey=`;
    const param = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
      },
      body,
    };
    const sjis = new Uint8Array(await (await fetch(url, param)).arrayBuffer());
    const html = SJIS.decode(sjis);
    //console.log(html);
    await Deno.writeTextFile("temp/page" + page + ".html", html);

    const dom = HTMLParser.parse(html);
    const max = parseInt(dom.querySelectorAll("input").find(i => i.getAttribute("name") == "max").getAttribute("value"));
    console.log(page, max);
    const list2 = parseList(dom);
    list2.forEach(i => list.push(i));
    if (page == max) break;
    await sleep(200);
  }
  return list;
};

/*
const url = "https://coco.cococica.com/saj/nakama/login_public.asp?page_no=34";
const list = await fetchList(url);
console.log(list);
*/
