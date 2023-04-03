import { error } from '@sveltejs/kit';
import { mysqlconn } from '$lib/db/mysql';
import type {RowDataPacket, OkPacket} from "mysql2/promise";
import { twitchcreds } from '$lib/db/twitch';
import fetch from 'node-fetch'
import type { RequestHandler } from '@sveltejs/kit';
import {json} from '@sveltejs/kit'

export const GET = async ({params}) => {

    const options: ResponseInit = {
      status: 418,
      headers: {
        'Cache-Control': 'max-age-60',
        'Content-Type': 'application/json'
      }
    }

    const results = await fetcher(parseInt(params.offset));

    return json(results)

      return {
        body: {results}
      };

}

async function fetcher(offset: number)
{
    let results = await mysqlconn.query<RowDataPacket[]>(`SELECT id, twitchName, data FROM players ORDER BY data->'$.itemAvgLevel' DESC, data->'$.expeditionLvl' DESC LIMIT ${99} OFFSET ${offset}`)
    .then(async function([rows, fields]) {

        const number: number = JSON.parse(JSON.stringify(fields));
        
        let names: string[] = [];

        let ids= "?";
        for (let i = 0; i < rows.length; i++)
        {
            ids += `id=${rows[i].twitchName}&`;
        }

        ids = ids.slice(0, -1);

        let userNames = await getUsername(ids)

        for (let i = 0; i < rows.length; i++)
        {
          let username = userNames.find(e => e.id == rows[i].twitchName)
          const obj: any = {
            rank: offset + i + 1,
            username: username.display_name,
            name: rows[i].data.pcName,
            itemlvl: Math.floor(rows[i].data.itemAvgLevel),
            class: rows[i].data.pcClassName,
            rosterlevel: rows[i].data.expeditionLvl
          }

          names.push(obj)
        }

        return names;
    });

    

    return results;

}

async function getUsername(uid: string)
{
    const token = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: {'Client-Id': `${twitchcreds.client_id}`},
    body: new URLSearchParams(twitchcreds)
  })
  const data: any = await token.json();

  const username = await fetch(`https://api.twitch.tv/helix/users${uid}`, {
    method: 'GET',
    headers: {
      'Client-Id': `${twitchcreds.client_id}`, 
      'Authorization': `Bearer ${data.access_token}`
    }
  })

  const user: any = await username.json();

  if(user.data.length != 0)
  {
    return user.data;
  }
  else
  {
    return 0;
  }



}