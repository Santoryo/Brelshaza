import { error } from '@sveltejs/kit';
import { mysqlconn } from '$lib/db/mysql';
import type {RowDataPacket, OkPacket} from "mysql2/promise";
import fetch from "node-fetch";
import { twitchcreds } from '$lib/db/twitch';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    return {
      id: params.id,
    };
  
 
}