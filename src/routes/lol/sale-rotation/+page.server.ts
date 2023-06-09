/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const results = await saleRotation();

      return {
        sale: results
      };

}


async function saleRotation() {
    const skins = await fetch(`https://api.brelshaza.com/v2/data/lol-sale`)
    const data: any = await skins.json();

    data.skins.sort(function(a, b) {
      return a.discountedPrice - b.discountedPrice
    })

    return data;
}