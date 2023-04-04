/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

  const temp = await fetch('https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json', {mode: 'no-cors'})
  const champ = await temp.json();
  let _champ = "";


  if(!isNaN(params.name))
  {
    let res = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
    let ver = await res.json();

    let res1 = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ver[0]}/data/en_US/championFull.json`)
    let x = await res1.json();
    _champ = x['keys'][params.name]
  }
  else
  {
    _champ = params.name.replace(/[\W_]+/g," ").replace(" ", "");
  }

  const skin = champ[Object.keys(champ).find(key => key.toLowerCase() == _champ.toLocaleLowerCase())];

    return {
      champ: skin
    };
  }