const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}


const leer = (myapi) => fetch(myapi).then( response  => response.json()).catch( console.log( 'No se resuelve' ) );


let pokelist = []
let nav =  []



async function pokeList(api="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40"){  
    
    let templist = await leer(api)
    nav =  []
    nav.push({anterior:templist.previous, siguiente :templist.next})
    
    pokelist = []
    templist.results.forEach(async (element) => {
       let myatribute = []
       myatribute =  await leer(element.url)
       myeffect =  await leer(myatribute.abilities[0].ability.url)
       
       pokelist.push({name: element.name , url: element.url, imagen: myatribute.sprites.front_default, imagenback: myatribute.sprites.back_default, urlability: myatribute.abilities[0].ability.url, type: myatribute.types[0].type.name, specie: myatribute.species.name, effect: myeffect.names[5].name})        
    })   
   myprint()
}



function myprint(){

    let catalogoPoke = document.querySelector("#pokemonster")

    let html = ''
    
    setTimeout(() => {
            catalogoPoke.innerHTML = ''
            pokelist.forEach(element => {
                let types = element.type
                let mycolor = colors[element.type]
                console.log(mycolor)


                html += `
                    <div class=" col-3 p-1 mt-2 mb-3">
                        <div class = "container">
                            <div class = card>
                                <div class = image>
                                    <img src = ${element.imagen}>
                                </div>
                                <div class = content style='background-color: ${colors[element.type]}; border-radius: 100px 100px 10rem 10rem;'>
                                    <h2 style="color:#000000; ">${element.name}</h2>
                                    
                                    <h4 style="color:#fff; -webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black; ">${element.type}</h4>
                                    <p>${element.effect}</p>
                                    <img src = ${element.imagenback}>
                                </div>
                            </div>    
                        </div>
                    </div>                
                `
            })

            catalogoPoke.innerHTML += html


            let navegacion = document.querySelector("#navegar")
            let navegacionF = document.querySelector("#navegarfoot")
            let botones = ''

            navegacion.innerHTML = botones
            navegacionF.innerHTML = botones

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
            navegacionF.innerHTML += botones

        

    }, 1000)

}

pokeList()


