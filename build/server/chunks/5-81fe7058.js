import './index-36410280.js';
import './mysql-144983da.js';
import fetch from 'node-fetch';
import 'mysql2/promise';

async function load({ params }) {
  const results = await saleRotation();
  return {
    sale: results
  };
}
async function saleRotation() {
  const skins = await fetch(`https://api.brelshaza.com/v2/data/lol-sale`);
  const data = await skins.json();
  data.skins.sort(function(a, b) {
    return a.discountedPrice - b.discountedPrice;
  });
  return data;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-4d179766.js')).default;
const file = '_app/immutable/entry/lol-sale-rotation-page.svelte.af38101f.js';
const server_id = "src/routes/lol/sale-rotation/+page.server.ts";
const imports = ["_app/immutable/entry/lol-sale-rotation-page.svelte.af38101f.js","_app/immutable/chunks/index.8c9c5232.js","_app/immutable/chunks/moment.142664c2.js"];
const stylesheets = ["_app/immutable/assets/moment.15793404.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-81fe7058.js.map
