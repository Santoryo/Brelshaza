import { c as create_ssr_component, e as escape, h as each } from './index3-2aa597f1.js';
import moment from 'moment';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="text-center text-4xl">MYTHIC SHOP ROTATION</h1>
<h1 class="text-center text-3xl uppercase">PATCH ${escape(data.patch)}</h1>
<h1 class="text-center text-2xl uppercase">ENDS ${escape(moment(data.date).fromNow())}</h1>
<div class="skins">${each(data.sale.skins, (name) => {
    return `
<div class="skin" style="${"background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/" + escape(name.championId, true) + "/" + escape(name.championId, true) + "0" + escape(name.skinId.toLocaleString("en-US", { minimumIntegerDigits: 2 }), true) + ".jpg')"}"><span class="skinInfo">${escape(name.skinName)}<br> 
    <span class="discountME">${escape(name.price)} ME</span></span>
</div>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bc74f10c.js.map
