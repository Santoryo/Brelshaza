import { c as create_ssr_component, v as validate_component, a as add_classes, b as add_attribute, e as escape, o as onDestroy, d as subscribe, n as noop } from './index3-2aa597f1.js';
import { g as getType, T as Types, a as autoMQLEvent, M as MQLEventMethods } from './MQLEvent-0e2b5a61.js';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { w as writable } from './index2-8c923995.js';

const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const css$1 = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$1);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1cj2gr0",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : `
          <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
class Calc {
  static get(mql) {
    return mql.media ? mql.matches : false;
  }
  static inline(mql) {
    return Calc.get(mql);
  }
  //@ts-ignore
  static array(mql) {
    return mql.map((mql2) => autoCalc(mql2));
  }
  //recursion :(
  static object(mql) {
    const res = {};
    for (const key in mql) {
      res[key] = autoCalc(mql[key]);
    }
    return res;
  }
}
function autoCalc(mql) {
  const type = getType(mql);
  if (type === Types.mediaQueryList)
    return Calc.inline(mql);
  if (type === Types.array)
    return Calc.array(mql);
  if (type === Types.object)
    return Calc.object(mql);
}
class MQL {
  static get(query) {
    return window.matchMedia(query);
  }
  static inline(query) {
    return MQL.get(query);
  }
  //@ts-ignore
  static array(queries) {
    return queries.map((query) => autoMQL(query));
  }
  //recursion :(
  static object(query) {
    const res = {};
    for (const key in query) {
      res[key] = autoMQL(query[key]);
    }
    return res;
  }
}
function autoMQL(query) {
  const type = getType(query);
  if (type === Types.string)
    return MQL.inline(query);
  if (type === Types.array)
    return MQL.array(query);
  if (type === Types.object)
    return MQL.object(query);
}
function mediaStore(query) {
  if (typeof window === "undefined")
    return { ...writable(void 0), destroy: () => {
    } };
  const { subscribe: subscribe2, set } = writable(void 0);
  const mql = autoMQL(query);
  const handleChange = () => set(autoCalc(mql));
  handleChange();
  autoMQLEvent(mql, handleChange);
  return {
    subscribe: subscribe2,
    destroy() {
      autoMQLEvent(mql, handleChange, MQLEventMethods.remove);
    }
  };
}
const createMediaStore = mediaStore;
const MediaQuery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store = noop, $$subscribe_store = () => ($$unsubscribe_store(), $$unsubscribe_store = subscribe(store, ($$value) => $store = $$value), store);
  let { query = "" } = $$props;
  let { matches = false } = $$props;
  let { matchesArray = [] } = $$props;
  let { matchesObject = {} } = $$props;
  let store;
  const updateMatches = (...watches) => {
    if (query) {
      matchesArray = Array.isArray($store) ? $store : [];
      matchesObject = getType($store) === Types.object ? $store : {};
      matches = $store ?? (getType(query) === Types.array ? [] : getType(query) === Types.object ? {} : false);
    } else {
      matches = false;
      matchesArray = [];
    }
  };
  const start = () => {
    $$subscribe_store(store = createMediaStore(query));
    updateMatches();
  };
  const destroy = () => {
    updateMatches();
    store?.destroy;
  };
  const update = (...watchers) => {
    destroy();
    query && start();
  };
  onDestroy(() => {
    destroy();
  });
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.matches === void 0 && $$bindings.matches && matches !== void 0)
    $$bindings.matches(matches);
  if ($$props.matchesArray === void 0 && $$bindings.matchesArray && matchesArray !== void 0)
    $$bindings.matchesArray(matchesArray);
  if ($$props.matchesObject === void 0 && $$bindings.matchesObject && matchesObject !== void 0)
    $$bindings.matchesObject(matchesObject);
  {
    update(query);
  }
  {
    updateMatches($store);
  }
  $$unsubscribe_store();
  return `${slots.default ? slots.default({ matches, matchesArray }) : ``}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="hamburger">${validate_component(Fa, "Fa").$$render($$result, { icon: faBars, size: "2x" }, {}, {})}</button>
${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 1034px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<nav${add_classes("".trim())}>${``}</nav>` : `<nav${add_classes("".trim())}><div class="background">${``}</div></nav>`}`;
    }
  })}`;
});
const css = {
  code: ".app.svelte-1bd5v96{display:flex;flex-direction:column;min-height:100vh}main.svelte-1bd5v96{flex:1;display:flex;flex-direction:column;padding:1rem;padding-top:60px;width:100%;max-width:80rem;margin:0 auto;box-sizing:border-box}footer.svelte-1bd5v96{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-1bd5v96{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1bd5v96">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main class="svelte-1bd5v96">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-1bd5v96"></footer>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-a4d84631.js.map
