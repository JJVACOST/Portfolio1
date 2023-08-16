
let mymenu = document.querySelector("#Catalogo")
let catalogo_menu = ""

fetch('assets/json/menu.json')
    .then((response) => response.json())
    .then((data) => {

        for (x = 0; x < data.length; x++) {

            let myprecio = Number(data[x].precio).toLocaleString('en');


            catalogo_menu += `
                <div class="col-3 p-2">
                  <div class="card">
                  <img src="${data[x].imagen}" class="card-img-top zoomimages" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${data[x].producto}</h5>
                    <p class="card-text">${data[x].descripcion}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">PRECIO: <span class="currency">${myprecio}</span> </li>
                  </ul>
                  <div class="card-body d-flex justify-content-end">
                    <button type="button" class="btn btn-light" onclick="agregarAlCarro(${data[x].id - 1})">
                      <i class="bi bi-bag-plus-fill"></i> Agregar
                    </button>
                  </div>
                  </div>
                </div>
                `
        }
        mymenu.innerHTML = catalogo_menu

    });




function agregarAlCarro(posicionArr) {
    fetch('assets/json/menu.json')
        .then((response) => response.json())
        .then((data) => {

            let registro = []
            let myid = 0

            if (localStorage.getItem("listaCompras") === null) {
                data[posicionArr].cantidad = 1
                registro.push(data[posicionArr])
                // console.log(registro)
                localStorage.setItem("listaCompras", JSON.stringify(registro))
                return
            } else {
                registro = localStorage.getItem("listaCompras")
                registro = JSON.parse(registro)
                console.log(registro)

                let id_producto_nuevo = data[posicionArr].id

                let comprobacion = registro.find(obj => id_producto_nuevo === obj.id)
                if (comprobacion == undefined) {
                    data[posicionArr].cantidad = 1
                    registro.push(data[posicionArr])
                    localStorage.setItem("listaCompras", JSON.stringify(registro))

                } else {
                    let indiceElementoExistente = registro.findIndex(obj => id_producto_nuevo === obj.id)
                    comprobacion.cantidad = parseInt(comprobacion.cantidad) + 1
                    registro[indiceElementoExistente] = comprobacion
                    registro.splice(indiceElementoExistente, 1)
                    registro.push(comprobacion)
                    localStorage.setItem("listaCompras", JSON.stringify(registro))
                }
                console.log("comp", comprobacion)
            }

        })
}




function Filtrar() {

    let textfil = document.getElementById("filtraProd").value

    fetch('assets/json/menu.json')
        .then((response) => response.json())
        .then((data) => {

            if (textfil.length > 0) {

                let filteredProducts = data.filter(data => data.producto == textfil);

                console.log(filteredProducts);
            }

        })
}



