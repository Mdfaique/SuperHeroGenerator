// https://superheroapi.com/api/access-token/character-id


const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const NewHeroButton=document.getElementById('newHeroButton')
const heroImageDiv=document.getElementById('HeroImage')
const searchButton=document.getElementById('searchButton')
const searchInput=document.getElementById('searchInput')
const heroName=document.getElementById('heroName')
const powerStatsDiv=document.getElementById('powerStats')


const getSearchSuperHero=(name)=>{
  fetch(`${BASE_URL}/search/${name}`)
  .then(response=>response.json())
  .then(json=>{
    const hero = json.results[0]
    // console.log(searchInput.value)
    console.log(json.results[0])
    heroName.innerText=`${searchInput.value.toUpperCase()}`
    heroImageDiv.innerHTML=`<img src='${hero.image.url}' height=300 width=300/>`
    powerStatsDiv.innerHTML=`${showHeroInfo(hero)}`
  })
}



const getSuperHero=(id)=>
  {
    console.log('hi')
    fetch(`${BASE_URL}/${id}`)
    .then(response=>response.json())
    .then(json=>
      {
        // console.log(json)
        // console.log(json.powerstats)
        heroName.innerText=`${json.name.toUpperCase()}`
        heroImageDiv.innerHTML =`<img src='${json.image.url}' height=300 width=300/>`
        powerStatsDiv.innerHTML=`${showHeroInfo(json)}`
      })
  }


const randomHero=()=>{
  const numberOfHeroes=731
   return Math.floor(Math.random()*numberOfHeroes)+1
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const showHeroInfo=(character)=>
  {
    //Object>keys turns object into array and map for travesrsing 
    const stats=Object.keys(character.powerstats).map(stat=>
      {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
      })
    console.log(stats.join(''))
    return stats.join('')
  }

newHeroButton.onclick=()=> getSuperHero(randomHero())
searchButton.onclick=()=> getSearchSuperHero(searchInput.value)
    
  




// document.querySelector('body').innerHTML+='<br>goodbye'






