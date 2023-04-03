import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, e as escape, h as each } from './index3-2aa597f1.js';
import { L as Loader } from './Loader-c14ce633.js';

async function getData(offset) {
  const res = await fetch(`/api/loa/${offset}`);
  const temp = await res.json();
  return temp;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset = 0;
  let text = "";
  let isLoading = false;
  let records = [];
  const loadData = async () => {
    isLoading = true;
    const response = await getData(offset);
    records = [...records, ...response];
    isLoading = false;
    text = records[0];
  };
  return `<h1 class="text-center text-4xl">LOST ARK LEADERBOARD</h1>
<h1 class="text-center text-3xl">UPDATES EVERY 2 HOURS</h1>
<h1 class="text-center text-2xl uppercase">There is 2000 players in database</h1>
${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}
`;
    }
    return function(response) {
      return `
<div class="wrapper"><div class="stats">${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return `
        
        `;
        }
        return function(message) {
          return `
        <div class="text-xl uppercase">${escape(message.name)}</div>
        <div class="text-sm uppercase">${escape(message.username)}</div>
        <div class="text-sm uppercase">RANK ${escape(message.rank)}</div>
        <div class="img" style="${"background-image: url('/images/loa/" + escape(message.class.toLowerCase(), true) + ".png')"}"></div>
        <div class="text-2xl uppercase">${escape(message.itemlvl)} iLVL</div>
        `;
        }(__value2);
      }(text)}</div>
    <div class="table"><div class="table-header"><div class="rank">#</div>
        <div class="name">NAME</div>
        <div class="ilvl">ITEM LVL</div>
        <div class="roster">ROSTER</div></div>
        ${each(records, (player) => {
        return `${player ? `<a href="${"/lostark/" + escape(player.username, true)}" target="_blank"><div class="player"><div class="rank">${escape(player.rank)}</div>
            <div class="name">${escape(player.name)}
                <svg width="30" height="30"><image xlink:href="${"https://lostark.meta-game.gg/ClassIcons/" + escape(player.class, true) + ".svg"}" width="30" height="30" style="filter: invert(1);"></image></svg></div>
            <div class="ilvl">${escape(player.itemlvl)}</div>
            <div class="roster">${escape(player.rosterlevel)}</div>
        </div></a>` : ``}`;
      })}
        <button ${isLoading ? "disabled" : ""} class="text-center">${escape(isLoading ? "LOADING..." : "LOAD MORE")}</button></div></div>
`;
    }();
  }(loadData())}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a42bc559.js.map
