let pokelist = []

const leer = (myapi) => fetch(myapi).then( response  => response.json()).catch( console.log( 'No se resuelve' ) );

async function pokeList(api="https://pokeapi.co/api/v2/pokemon/"){  
    
    let templist = await leer(api)

    templist.results.forEach(async (element) => {
       let myatribute = []
       myatribute =  await leer(element.url)
       myeffect =  await leer(myatribute.abilities[0].ability.url)

       console.log(myeffect.effect_entries[0].effect)

       
       pokelist.push({name: element.name , url: element.url, imagen: myatribute.sprites.front_default, urlability: myatribute.abilities[0].ability.url, effect: myeffect.effect_entries[0].effect})        
    })   
    
}



function myprint(){

    let catalogoPoke = document.querySelector("#pokemonster")

    let html = ''

    setTimeout(() => {
            pokelist.forEach(element => {
                console.log(element)

                html += `
                    <div class=" col-3 p-1 mt-2 mb-3">
                        <div class = "container">
                            <div class = card>
                                <div class = image>
                                    <img src = ${element.imagen}>
                                </div>
                                <div class = content>
                                    <h3>${element.name}</h3>
                                    <p>${element.effect}</p>
                                </div>
                            </div>    
                        </div>
                    </div>                
                `
            })

            catalogoPoke.innerHTML += html

    }, 1000)
}

pokeList()
myprint()