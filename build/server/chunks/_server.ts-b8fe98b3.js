import { m as mysqlconn } from './mysql-144983da.js';
import { j as json } from './index-36410280.js';
import { t as twitchcreds } from './twitch-f6adb373.js';
import 'mysql2/promise';

const GET = async ({ params }) => {
  const results = await getUser(params.id);
  return json(results);
};
async function getUser(user) {
  const uid = await getId(user);
  let results = await mysqlconn.query(`SELECT * FROM players WHERE twitchName = ${uid}`).then(function([rows, fields]) {
    JSON.parse(JSON.stringify(fields));
    let names = [];
    for (let i = 0; i < rows.length; i++) {
      names.push(rows[i].data.pcName);
    }
    return names;
  });
  return results;
}
async function getId(userName) {
  const token = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Client-Id": `${twitchcreds.client_id}` },
    body: new URLSearchParams(twitchcreds)
  });
  const data = await token.json();
  const username = await fetch(`https://api.twitch.tv/helix/users?login=${userName}`, {
    method: "GET",
    headers: {
      "Client-Id": `${twitchcreds.client_id}`,
      "Authorization": `Bearer ${data.access_token}`
    }
  });
  const user = await username.json();
  if (user.data.length != 0) {
    return user.data[0].id;
  } else {
    return 0;
  }
}

export { GET };
//# sourceMappingURL=_server.ts-b8fe98b3.js.map
