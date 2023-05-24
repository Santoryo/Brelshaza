import {json} from '@sveltejs/kit'

export const GET = async ({params}) => {


    const res = await fetch(`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index_new/en/relics.json`)
    const results = await res.json();


    interface Item {
        id: string;
        set_id: string;
        name: string;
        rarity: number;
        type: string;
        max_level: number;
        main_affix_id: string;
        sub_affix_id: string;
        icon: string;
    }

    let item: any;

    for (const [itemKey, itemValue] of Object.entries(results)) {
    {
        const currentItem: Item = itemValue as Item; // Explicitly define the type of itemValue as Item
        if (currentItem.name === params.id) {
            item = currentItem;
            break;
        }
    }
    }
    

    const options: ResponseInit = {
      status: 418,
      headers: {
        'Cache-Control': 'max-age-60',
        'Content-Type': 'application/json'
      }
    }
    

    return json(item)
}