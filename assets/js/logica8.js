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
            let mystatus = personaje.status
            let stat_color = ""
            let stat_icon = ""

            switch (mystatus){
              case "Alive" : 
                stat_color = "Green"
                stat_icon = "bi bi-heart-pulse"
              break
              case "Dead" : 
                stat_color = "red"
                stat_icon = "bi bi-heartbreak"
              break
              default : 
                stat_color = "blue"
                stat_icon = "bi bi-heart-half"
              
            }
            let mygender = personaje.gender
            let gend_color = ""
            let gend_icon = ""

            switch (mygender){
              case "Female" : 
              gend_color = "DeepPink"
              gend_icon = "bi bi-gender-female"
              break
              case "Male" : 
              gend_color = "DeepSkyBlue"
              gend_icon = "bi bi-gender-male"
              break
              case "Genderless" : 
              gend_color = "MediumSlateBlue"
              gend_icon = "bi bi-gender-ambiguous"
              break
              default : 
              gend_color = "gray"
              gend_icon = "bi bi-slash-circle"
              
            }

            rmhtml += `
                <div class="col-3 p-2">
                  <div class="card">
                    <img src="${personaje.image}" class="card-img-top zoomimages" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${personaje.name}</h5>                    
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Status: <i class="${stat_icon}" style="color:${stat_color}"></i> </li>
                      <li class="list-group-item">Gender: <i class="${gend_icon}" style="color:${gend_color}"></i> </li>
                    </ul>
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