import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, e as escape, h as each } from './index3-2aa597f1.js';
import { L as Loader } from './Loader-c14ce633.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let user = "";
  async function loadData() {
    console.log("fetching....");
    const res = await fetch(`/api/loa/user/${data.id}`);
    user = await res.json();
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}
`;
    }
    return function() {
      return `
${user.length > 0 ? `<h1>${escape(user[0])}</h1>
<h2>User has ${escape(user.length)} characters</h2>

${each(user, (name) => {
        return `<div>${escape(name)}</div>`;
      })}` : `NIE MA KURWA`}
`;
    }();
  }(loadData())}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-901044f2.js.map
