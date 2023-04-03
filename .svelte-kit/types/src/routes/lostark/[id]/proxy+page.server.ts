// @ts-nocheck
import { error } from '@sveltejs/kit';
import { mysqlconn } from '$lib/db/mysql';
import type {RowDataPacket, OkPacket} from "mysql2/promise";
import { twitchcreds } from '$lib/db/twitch';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params }) {

    return {
      id: params.id,
    };
  
 
}