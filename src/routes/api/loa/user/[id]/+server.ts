import { mysqlconn } from '$lib/db/mysql';
import type {RowDataPacket, OkPacket} from "mysql2/promise";
import {json} from '@sveltejs/kit'
import { twitchcreds } from '$lib/db/twitch';

export const GET = async ({params}) => {

    const options: ResponseInit = {
      status: 418,
      headers: {
        'Cache-Control': 'max-age-60',
        'Content-Type': 'application/json'
      }
    }

    const results = await getUser(params.id);

    return json(results)
}

async function getUser(user: string) {
    const uid: number = await getId(user);
    let results = await mysqlconn.query<RowDataPacket[]>(`SELECT * FROM players WHERE twitchName = ${uid}`)
    .then(function([rows, fields]) {
        const number: number = JSON.parse(JSON.stringify(fields));
        
        let names: string[] = [];

        for (let i = 0; i < rows.length; i++)
        {
          names.push(rows[i].data.pcName)
        }
        

        return names;
    });

    return results;

}

async function getId(userName: string)
{

  const token = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: {'Client-Id': `${twitchcreds.client_id}`},
    body: new URLSearchParams(twitchcreds)
  })

  const data: any = await token.json();

  const username = await fetch(`https://api.twitch.tv/helix/users?login=${userName}`, {
    method: 'GET',
    headers: {
      'Client-Id': `${twitchcreds.client_id}`, 
      'Authorization': `Bearer ${data.access_token}`
    }
  })

  const user: any = await username.json();

  if(user.data.length != 0)
  {
    return user.data[0].id
  }
  else
  {
    return 0;
  }



}