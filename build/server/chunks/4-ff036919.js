import fetch from 'node-fetch';

const patches = [
  {
    patch: "13.1",
    date: "Wednesday, Jan 11, 2023"
  },
  {
    patch: "13.2",
    date: "Wednesday, Jan 25, 2023"
  },
  {
    patch: "13.3",
    date: "Wednesday, Feb 8, 2023"
  },
  {
    patch: "13.4",
    date: "Thursday, Feb 23, 2023"
  },
  {
    patch: "13.5",
    date: "Wednesday, March 8, 2023"
  },
  {
    patch: "13.6",
    date: "Wednesday, March 22, 2023"
  },
  {
    patch: "13.7",
    date: "Wednesday, April 5, 2023"
  },
  {
    patch: "13.8",
    date: "Wednesday, April 19, 2023"
  },
  {
    patch: "13.9",
    date: "Wednesday, May 3, 2023"
  },
  {
    patch: "13.10",
    date: "Wednesday, May 17, 2023"
  },
  {
    patch: "13.11",
    date: "Thursday, June 1, 2023"
  },
  {
    patch: "13.12",
    date: "Wednesday, June 14, 2023"
  },
  {
    patch: "13.13",
    date: "Wednesday, June 28, 2023"
  },
  {
    patch: "13.14",
    date: "Wednesday, July 19, 2023"
  },
  {
    patch: "13.15",
    date: "Wednesday, Aug 2, 2023"
  },
  {
    patch: "13.16",
    date: "Wednesday, Aug 16, 2023"
  },
  {
    patch: "13.17",
    date: "Wednesday, Aug 30, 2023"
  },
  {
    patch: "13.18",
    date: "Wednesday, Sept 13, 2023"
  },
  {
    patch: "13.19",
    date: "Wednesday, Sept 27, 2023"
  },
  {
    patch: "13.20",
    date: "Wednesday, Oct 11, 2023"
  },
  {
    patch: "13.21",
    date: "Wednesday, Oct 25, 2023"
  },
  {
    patch: "13.22",
    date: "Wednesday, Nov 8, 2023"
  },
  {
    patch: "13.23",
    date: "Tuesday, Nov 21, 2023"
  },
  {
    patch: "13.24",
    date: "Wednesday, Dec 6, 2023"
  }
];
async function load({ params }) {
  let results = await saleRotation();
  const temp = await lolpatch();
  const patch = temp[0];
  const date = temp[1];
  const url = `http://ddragon.leagueoflegends.com/cdn/${patch}.1/data/en_US/championFull.json`;
  const chF = await fetch(url);
  const championFull = await chF.json();
  for (var i = 0; i < results.skins.length; i++) {
    let key = championFull.keys[results.skins[i].championId];
    let skins = championFull.data[key].skins;
    let skinName = skins.find((e) => e.num == results.skins[i].skinId);
    results.skins[i].skinName = skinName.name;
  }
  return {
    date,
    patch,
    sale: results,
    endpoint: url
  };
}
async function lolpatch() {
  const temp = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  let version = await temp.json();
  const ver = version[0].slice(0, -2);
  function getDateFromPatch(patch) {
    const patchObj = patches.find((p) => p.patch === patch);
    return patchObj ? patchObj.date : null;
  }
  let incremented = ver.split(".").pop();
  let newPatch = ver.split(".")[0] + "." + (parseInt(incremented) + 1);
  const date = getDateFromPatch(newPatch);
  return [ver, date];
}
async function saleRotation() {
  const skins = await fetch(`https://api.brelshaza.com/v2/data/lol-mythics`);
  let data = await skins.json();
  return data;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-bc74f10c.js')).default;
const file = '_app/immutable/entry/lol-mythic-shop-page.svelte.beead9f1.js';
const server_id = "src/routes/lol/mythic-shop/+page.server.ts";
const imports = ["_app/immutable/entry/lol-mythic-shop-page.svelte.beead9f1.js","_app/immutable/chunks/index.8c9c5232.js","_app/immutable/chunks/moment.142664c2.js"];
const stylesheets = ["_app/immutable/assets/moment.15793404.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-ff036919.js.map
