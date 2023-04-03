import { c as create_ssr_component, d as subscribe, e as escape } from './index3-2aa597f1.js';
import { p as page } from './stores-813221e0.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 class="text-3xl font-bold underline">User ${escape($page.error.message)} isn&#39;t in our database.</h1>

<h2>Step 1. Activate the Lost Ark Twitch Extension</h2>
<div>Make sure the extension is installed and configured in your <a href="https://dashboard.twitch.tv/extensions/search?q=Lost%20Ark%20Armory">Twitch Creator Dashboard</a> - for detailed instructions on setting this up see the <a href="https://www.amazongames.com/en-us/support/lost-ark/articles/set-up-twitch-extensions-for-streaming">Set up Guide from Amazon Games</a>.
    The Lost Ark Armory Extension allows players to opt into sharing their armory info. Although it requires a Twitch account, you do not need to stream for the lookup to work.</div>
<h2>Step 2. Log In to Lost Ark</h2>
<div>Once you&#39;ve enabled the Twitch Extension, please log into Lost Ark on character and reload the page. If you want to add more characters to your username, refresh the page or hit the refresh.</div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-93d4c62c.js.map
