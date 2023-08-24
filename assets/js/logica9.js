let pokelist = []
let nav =  []


const leer = (myapi) => fetch(myapi).then( response  => response.json()).catch( console.log( 'No se resuelve' ) );

async function pokeList(api="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"){  
    
    let templist = await leer(api)
    nav =  []
    nav.push({anterior:templist.previous, siguiente :templist.next})
    
    pokelist = []
    templist.results.forEach(async (element) => {
       let myatribute = []
       myatribute =  await leer(element.url)
       myeffect =  await leer(myatribute.abilities[0].ability.url)

      

       
       pokelist.push({name: element.name , url: element.url, imagen: myatribute.sprites.front_default, urlability: myatribute.abilities[0].ability.url, effect: myeffect.effect_entries[0].effect})        
    })   
    myprint()
}



function myprint(){

    let catalogoPoke = document.querySelector("#pokemonster")

    let html = ''
    
    setTimeout(() => {
            catalogoPoke.innerHTML = ''
            pokelist.forEach(element => {
                

                html += `
                    <div class=" col-3 p-1 mt-2 mb-3">
                        <div class = "container">
                            <div class = card>
                                <div class = image>
                                    <img src = ${element.imagen}>
                                </div>
                                <div class = content>
                                    <h3 style="color:#FFCC00">${element.name}</h3>
                                    <p>${element.effect}</p>
                                </div>
                            </div>    
                        </div>
                    </div>                
                `
            })

            catalogoPoke.innerHTML += html


            let navegacion = document.querySelector("#navegar")
            let botones = ''

            navegacion.innerHTML = botones

            console.log(nav)

            if(nav[0].anterior != null){
            botones += `
                        <div class="col-4 d-flex justify-content-center">
                            <button class="buttonRM" id="buttonRMBack"  onclick="pokeList('${nav[0].anterior}')">anterior</button>
                        </div>          
                        `
                                        }
            if(nav[0].siguiente != null){
            botones += `
                        <div class="col-4 d-flex justify-content-center">
                            <button class="buttonRM" id="buttonRMForw" onclick="pokeList('${nav[0].siguiente}')">siguiente</button>
                        </div>          
                        `
                                        }

            navegacion.innerHTML += botones

        

    }, 1000)
}

pokeList()


