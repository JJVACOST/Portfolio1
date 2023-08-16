let myApi = "https://rickandmortyapi.com/api/character"
let rmhtml = ""

fetch(myApi)
    .then((response) => response.json())
    .then((dataRick) => {

        let divRM = document.querySelector("#cardsRM")
        console.log(dataRick)
       
        dataRick.results.forEach((personaje) => {

            rmhtml += `
                <div class="col-2 p-2">
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

    });