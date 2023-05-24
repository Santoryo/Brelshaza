import {json} from '@sveltejs/kit'
import {MongoClient} from 'mongodb'


export const GET = async ({params}) => {


    const res = await fetch(`https://api.mihomo.me/sr_info_parsed/${params.uid}?lang=en`)
    let results = await res.json();

    const regex = /\.png\b/gi;
    results = JSON.stringify(results).replace(regex, '.webp');
    results = JSON.parse(results);




    const options: ResponseInit = {
      status: 418,
      headers: {
        'Cache-Control': 'max-age-60',
        'Content-Type': 'application/json'
      }
    }

    return json(results)
}