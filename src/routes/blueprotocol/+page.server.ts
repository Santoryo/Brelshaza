import * as dotenv from 'dotenv'
dotenv.config();

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const results = await saleRotation();

      return {
        results
      };

}


async function saleRotation() {

    const payload = {
        "collection":"posts",
        "database":"discblog",
        "dataSource":"samira"
    }

    const posts = await fetch(`https://eu-central-1.aws.data.mongodb-api.com/app/data-cjekr/endpoint/data/v1/action/find`, 
    {
        method: 'POST', 
        headers: {'api-key': `${process.env.API_KEY}`},
        body: JSON.stringify(payload)
    })
    const data: any = await posts.json();

    return data;
}