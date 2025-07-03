import { Pokemon } from "./type";





const END_POINT = 'https://pokeapi.co/api/v2/pokemon/31';


// fetchData 함수를 만들고 타입을 지정해주세요

// fetch(END_POINT)
//     .then((response) => response.json())
//     .then((data) => console.log(data))


async function fetchData(url:string):Promise<Pokemon> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  fetchData(END_POINT)




// createCard
function createCard({ sprites, name }:Pick<Pokemon, 'sprites'|'name'>):string {
  
  const tag = `
    <div class="card">
      <img src="${sprites['front_default']}" alt="${name}"/>
      <h2>${name}</h2>
    </div>
  `

  return tag
}



// renderCard
function renderCard(target:HTMLElement | null, data:Pokemon):void {
  
  // target?.insertAdjacentHTML('beforeend', createCard(data))
  target && target.insertAdjacentHTML('beforeend', createCard(data))
      // 앞 target이 false면 뒤에 target실행 X
}

function fetchPokemon() {
  const arr:Promise<Pokemon>[] = [];

  Array(10).fill(null).forEach((_,i) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`
    arr.push(fetch(url).then((res) => res.json()));
  })

  return arr;

}

function createPokemonObject(arr:Promise<Pokemon>[]) {
  
  let pokemon: unknown;

  // 배열에 있는 것 모두 순환(.all)
  Promise.all(arr)
    .then((all) => {
      pokemon = all.map((p) => {
        return {
          name: p.name,
          image:p.sprites['front_default']
        }
      })
    })
  return pokemon
}

createPokemonObject(fetchPokemon())




























































