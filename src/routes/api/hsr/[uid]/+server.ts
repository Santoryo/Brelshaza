import {json} from '@sveltejs/kit'

export const GET = async ({params}) => {


    const res = await fetch(`https://api.mihomo.me/sr_info_parsed/${params.uid}?lang=en`)
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