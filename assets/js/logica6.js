let subjectsList = [
  'Matemáticas',
  'Ciencia de la computación',
  'Ingeniería de software',
  'Arquitectura de software',
  'Diseño de software',
  'Pruebas de software',
  'Gestión de proyectos de software',
  'Etica de la ingeniería de software'
]


let agregamaterias = document.querySelector("#listaMaterias")
let vmatricula = document.querySelector("#valormatricula")
let idcontador = 0





subjectsList.forEach(subject => {
  idcontador = idcontador + 1
  agregamaterias.innerHTML += `                              
                              <div class="m-1 row w-100">
                                <div class="col-8 d-flex justify-content-end">
                                  ${subject}
                                </div>
                                <div class="col-3 d-flex justify-content-start">
                                  <input type="text" class="w-50" data-materias="" name="notas${idcontador}" id="notas${idcontador}" min="0" max="5" maxlength="4"  onkeyup="checkValue(this);pepe(this)">
                                </div>
                              </div>
                              `

})




function myFunction() {

  if (localStorage.getItem("position") === null) {
    localStorage.setItem("position", 0)
  }

  let resultado = ""

  if (localStorage.getItem("position") == 0) {
    document.getElementById("moverEsto").classList.add('pageleft')
    document.getElementById("moverEsto").classList.remove('pageright')
    localStorage.setItem("position", 1)


    let notas = document.querySelectorAll("[data-materias]")
    let sum = 0.00
    

    notas.forEach(mynota => {
      console.log(mynota.value*1 + ' valor')
      sum = parseFloat(sum) + parseFloat(mynota.value)
      
      console.log(mynota.id + ' la nota es ' + mynota.value)
      console.log(' la nota acumlada es ' + sum)

    })

    let promedio = (sum / notas.length).toFixed(2)
    let valor = 0
    let descuento = ""
    console.log(promedio + ' prom')


    if (promedio < 3) {
      valor = 1000000 - (1000000 * 0.0)
      descuento = "0%"
    } else if (promedio >= 3 && promedio <= 4) {
      valor = 1000000 - (1000000 * 0.05)
      descuento = "5%"
    } else if (promedio > 4) {
      valor = 1000000 - (1000000 * 0.5)
      descuento = "50%"
    }
    
      vmatricula.innerHTML += ` 
                            <div>
                              <h1>Ingenieria de Software</h1>
                            </div>                          
                            <div>
                              Tu matricula tiene un valor <span class="currency"><b>1000000</b></span>
                            </div>
                            <div>
                              Tu promedio fue : <b>${promedio}</b>
                            </div>        
                            <div>
                              Tienes un descuento del: <b>${descuento}</b>
                            </div>              
                            <div>
                            Tu matricula con descuento tiene un valor de <span class="currency"><b>${valor}</b></span>
                            </div> 
                            `


  } else {
    document.getElementById("moverEsto").classList.add('pageright')
    document.getElementById("moverEsto").classList.remove('pageleft')
    localStorage.setItem("position", 0)
    vmatricula.innerHTML = ''
  }



}

function exit(){
  let notas = document.querySelectorAll("[data-materias]")
  let exx = 0
  notas.forEach(mynota => {
      if (mynota.value != ""){        
        exx = exx + 1
      }
  })
  if (notas.length != exx){
    Swal.fire('Diligencie todas las notas!!')
    return
  }else{
    myFunction()
  }
  

}

function int(value) {
  return parseFloat(value).toFixed(2)
}

function checkValue(sender) {
  let min = 0
  let max = 5
  let values = int(sender.value)
  if (values >= max) {
    sender.value = max;
  } else if (values < min) {
    sender.value = min;
  }
}

function pepe(valor) {
  let valorInput = valor.value
  valorInput = valorInput.replace(/[^\d.]/g,'')
  valor.value = valorInput
  }
