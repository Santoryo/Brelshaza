import { j as json } from './index-36410280.js';
import { m as mysqlconn } from './mysql-144983da.js';
import { t as twitchcreds } from './twitch-f6adb373.js';
import fetch from 'node-fetch';
import 'mysql2/promise';

const GET = async ({ params }) => {
  const results = await fetcher(parseInt(params.offset));
  return json(results);
};
async function fetcher(offset) {
  let results = await mysqlconn.query(`SELECT id, twitchName, data FROM players ORDER BY data->'$.itemAvgLevel' DESC, data->'$.expeditionLvl' DESC LIMIT ${99} OFFSET ${offset}`).then(async function([rows, fields]) {
    JSON.parse(JSON.stringify(fields));
    let names = [];
    let ids = "?";
    for (let i = 0; i < rows.length; i++) {
      ids += `id=${rows[i].twitchName}&`;
    }
    ids = ids.slice(0, -1);
    let userNames = await getUsername(ids);
    for (let i = 0; i < rows.length; i++) {
      let username = userNames.find((e) => e.id == rows[i].twitchName);
      const obj = {
        rank: offset + i + 1,
        username: username.display_name,
        name: rows[i].data.pcName,
        itemlvl: Math.floor(rows[i].data.itemAvgLevel),
        class: rows[i].data.pcClassName,
        rosterlevel: rows[i].data.expeditionLvl
      };
      names.push(obj);
    }
    return names;
  });
  return results;
}
async function getUsername(uid) {
  const token = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Client-Id": `${twitchcreds.client_id}` },
    body: new URLSearchParams(twitchcreds)
  });
  const data = await token.json();
  const username = await fetch(`https://api.twitch.tv/helix/users${uid}`, {
    method: "GET",
    headers: {
      "Client-Id": `${twitchcreds.client_id}`,
      "Authorization": `Bearer ${data.access_token}`
    }
  });
  const user = await username.json();
  if (user.data.length != 0) {
    return user.data;
  } else {
    return 0;
  }
}

export { GET };
//# sourceMappingURL=_server.ts-2f117bda.js.map
