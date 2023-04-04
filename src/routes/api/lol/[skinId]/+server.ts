import {json} from '@sveltejs/kit'

export const GET = async ({params}) => {


    const res = await fetch(`https://api.brelshaza.com/v2/data/lol-skin/${params.skinId}`)
    const results = await res.json();

    const options: ResponseInit = {
      status: 418,
      headers: {
        'Cache-Control': 'max-age-60',
        'Content-Type': 'application/json'
      }
    }

    return json(results)
}