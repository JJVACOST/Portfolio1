
let erdosSequence = [
    { fuente: 1, sequence: [1] },
    { fuente: 4, sequence: [4, 2, 1] }
]

function collatz(y){
    secuencia.push(y)
    if(y==1){
       return 1
    }else if(y%2 ==0){
        let par = y/2
        return collatz(par)
    }
    else{
        let impar = (y * 3) + 1
        return collatz(impar)
    }
}

function guardarCollatz(xy){
    mynumero = xy
    secuencia = []
    collatz(mynumero)    
    erdosSequence.push({fuente:mynumero, sequence:secuencia})
}

let lista = document.querySelector("#numerosDisp")
lista.innerHTML = ``
erdosSequence.forEach(elemento => {
    
    lista.innerHTML += `
                      <option value="${elemento.fuente}">${elemento.fuente}</option>                     `

})

let calcular = document.querySelector('#mybutton')
let seleccion = document.querySelector('#mynumber')

calcular.addEventListener("click", evento=>{
    
    if (seleccion.value == ""){
        Swal.fire('Indique un numero')
        return
    } 

    if(erdosSequence.findIndex(obj => seleccion.value === obj.fuente)>=0){
        Swal.fire('El numero seleccionado ya fue calculado')
        return
    }

    guardarCollatz(seleccion.value)
    let lista = document.querySelector("#numerosDisp")
    lista.innerHTML = ``

    erdosSequence.forEach(elemento => {
        lista.innerHTML += `
                      <option value="${elemento.fuente}">${elemento.fuente}</option>                     `
                                      })
    seleccion.value = ''
    Swal.fire('Para visualizar el numero seleccionelo de la lista')
    return

})


lista.addEventListener("change", (evento) => {

    let elementoPrincipal = document.querySelector("#contenedorCanvas")
    elementoPrincipal.innerHTML = ""

    let canvasHijo = document.createElement("canvas")
    canvasHijo.id = "grafErdos"
    canvasHijo.classList.add("grafico")
    elementoPrincipal.appendChild(canvasHijo)

    let seleccionado = evento.target.value
   
    let indiceElemento = erdosSequence.findIndex(obj => seleccionado == obj.fuente)

    let valida = erdosSequence[indiceElemento].sequence.length
    let axisx = []
    for (x = 1; x <= valida; x++) {
        valor = "n" + x
        axisx.push(valor)
    }

    console.log(indiceElemento)

    let canvaErdos = document.querySelector("#grafErdos")

    new Chart(canvaErdos, {
        type: 'line',
        data: {
            labels: axisx,
            datasets: [{
                label: seleccionado,
                data: erdosSequence[indiceElemento].sequence,
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#FF7F50',
                borderWidth: 1,
                pointBackgroundColor: '#FF7F50',
                pointStyle: 'triangle',
                pointRadius: 5,
                      }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                        },
                title: {
                    display: true,
                    text: 'Secuencia para el numero seleccionado'
                        },
                layout:{
                    padding:50

                }
                
            }
          }
        


    })
})

function vertodos(array){
    let elementoPrincipal = document.querySelector("#contenedorCanvas")
    elementoPrincipal.innerHTML = ""

    let canvasHijo = document.createElement("canvas")
    canvasHijo.id = "grafErdos"
    canvasHijo.classList.add("grafico")
    elementoPrincipal.appendChild(canvasHijo)

    let axisx = []
    for (x = 1; x <= 500; x++) {
        valor = "n" + x
        axisx.push(valor)
    }


    array.forEach(element => {
        
    })



    let canvaErdos = document.querySelector("#grafErdos")

    new Chart(canvaErdos, {
        type: 'line',
        data: {
            labels: axisx,
            datasets: [{
                label: seleccionado,
                data: erdosSequence[indiceElemento].sequence,
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#FF7F50',
                borderWidth: 1,
                pointBackgroundColor: '#FF7F50',
                pointStyle: 'triangle',
                pointRadius: 5,
                      }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                        },
                title: {
                    display: true,
                    text: 'Secuencia para el numero seleccionado'
                        },
                layout:{
                    padding:50

                }
                
            }
          }
        


    })


}