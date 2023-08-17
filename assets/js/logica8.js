function loadpage(params = "https://rickandmortyapi.com/api/character") {
  
let myApi = params
let rmhtml = ""

    fetch(myApi)
        .then((response) => response.json())
        .then((dataRick) => {

        let divRM = document.querySelector("#cardsRM")
        console.log(dataRick)
        divRM.innerHTML = rmhtml

        dataRick.results.forEach((personaje) => {
            rmhtml += `
                <div class="col-3 p-2">
                  <div class="card">
                  <img src="${personaje.image}" class="card-img-top zoomimages" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">${personaje.gender}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">PRECIO: <span class="currency">precio</span> </li>
                  </ul>
                  <div class="card-body d-flex justify-content-end">
                    </button>
                  </div>
                  </div>
                </div>
                `
        })
        console.log(rmhtml)
        divRM.innerHTML += rmhtml

        let navegacion = document.querySelector("#buttonsNav")
        let botones = ''

        navegacion.innerHTML = botones

        if(dataRick.info.prev != null){
          botones += `
                      <div class="col-4 d-flex justify-content-center">
                        <button class="buttonRM" id="buttonRMBack"  onclick="loadpage('${dataRick.info.prev}')">anterior</button>
                      </div>          
                      `
                                      }
        if(dataRick.info.next != null){
          botones += `
                      <div class="col-4 d-flex justify-content-center">
                        <button class="buttonRM" id="buttonRMForw" onclick="loadpage('${dataRick.info.next}')">siguiente</button>
                      </div>          
                      `
                                      }

        navegacion.innerHTML += botones

    })
    
    }


    loadpage()

    let myfiltro  = document.querySelector("#buscador")

    myfiltro.addEventListener("change", (e) => {
      console.log(e.target.value)
      let mivalor = "https://rickandmortyapi.com/api/character/?name=" + e.target.value

      console.log(mivalor)

      loadpage(mivalor)

    })