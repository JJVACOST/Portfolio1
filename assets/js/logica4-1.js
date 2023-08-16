let consoloStarText = [
"Zion Restaurant",
"¿Qué desea pedir?",
"Para obtener ayuda, escriba 'ayuda'"
]

let comandlist = [
"ayuda: Muestra la lista de comandos", 
"menu: Muestra el menu, ordenar: menu.precio / menu.producto", 
"agregar: permite agregar producto. ejemplo: agregar nombreproducto", 
"eliminar: permite eliminar producto. ejemplo: eliminar nombreproducto", 
"mipedido: ver el detalle de pedido", 
"cancelarpedido: borrar mi pedido",
"limpiar: limpiar consola"
]

let menulist = [ 
  { producto: 'Hamburguesa', precio: 5000 },
  { producto: 'Sushi', precio: 25000 },
  { producto: 'Pizza', precio: 18000 },
  { producto: 'Perro Caliente', precio: 8000 },
  { producto: 'Jugo', precio: 4500 },
  { producto: 'Papas fritas', precio: 3000 },
  { producto: 'Alitas', precio: 2500 },
  { producto: 'Aros de cebolla', precio: 1500 },
  { producto: 'Enchiladas', precio: 1000 },
  { producto: 'Tacos', precio: 500 },
  { producto: 'Burritos', precio: 400 },
  { producto: 'Quesadillas', precio: 300 },
  { producto: 'Nachos', precio: 200 },
  { producto: 'Flautas', precio: 100 },
  { producto: 'Arepa', precio: 2000 }
  ]

let tiempos = [1500,2500,3500]

let StCom = document.querySelector("#starConsole")

let tiempos2=[]




console.log(StCom)

for (let timeF = 0; timeF < tiempos.length; timeF++) {
  setTimeout(() => {
    delayline('> ' + consoloStarText[timeF])
  }, tiempos[timeF]);  
  
}


function delayline(text) {
  let elementoNuevo = document.createElement("p")
  elementoNuevo.innerText = text   
  StCom.appendChild(elementoNuevo)
}


window.onload = function() {
  setTimeout(() => {
    document.getElementById("starConsole").classList.remove('typewriter')
    document.getElementById("starConsole").classList.add('typeacept')
    document.getElementById("text1").focus();


    let usuario = document.querySelector("#text1")
    console.log(usuario)

    usuario.addEventListener("change", (evento) =>{
    
    peticion = evento.target.value

    console.log(peticion)


    if (peticion == 'ayuda'){
        cargar_tiempos(comandlist, tiempos2)
        console.log(tiempos2)
        delayline('<-- '+peticion)
        for (let timeF = 0; timeF < tiempos2.length; timeF++) {
            delayline('> '+comandlist[timeF])

            }

    }else if (peticion.slice(0, 4) == 'menu'){
      
      cargar_tiempos(menulist, tiempos2)
      console.log(tiempos2)

      if(peticion=='menu'){
        delayline('<-- '+peticion)
        for (let timeF = 0; timeF < tiempos2.length; timeF++) {          
          delayline('> '+'producto: ' +menulist[timeF].producto + ' precio: $' + menulist[timeF].precio)
        }

      }else if(peticion.slice(4, peticion.length)=='.precio'){
        menulist.sort((a, b) => a.precio - b.precio)
        delayline('<-- '+peticion)
        for (let timeF = 0; timeF < tiempos2.length; timeF++) {          
          delayline('> '+'producto: ' +menulist[timeF].producto + ' precio: $' + menulist[timeF].precio)
        }
      }else if(peticion.slice(4, peticion.length)=='.producto'){
        menulist.sort((a, b) => a.producto.localeCompare(b.producto))
        delayline('<-- '+peticion)
        for (let timeF = 0; timeF < tiempos2.length; timeF++) {          
          delayline('> '+'producto: ' +menulist[timeF].producto + ' precio: $' + menulist[timeF].precio)
        }
      }





    }else if (peticion.slice(0, 7) == 'agregar'){

      if (peticion == 'agregar'){

        delayline('<-- agregar')
        delayline('> escriba el nombre de un producto')

      }else if (peticion.slice(0, 7) == 'agregar'){

        productoUsuario = peticion.slice(8, peticion.length)
        console.log(productoUsuario)


        /*---Inicio logica agregar productos---*/
        let data = menulist.find(menu => menu.producto === productoUsuario)

        let registro = []
        if (data == undefined){
          delayline('<-- '+peticion)
          delayline('> el producto "'+productoUsuario+'" no existe')
          document.getElementById("text1").value = ''
          StCom.scrollTop = StCom.scrollHeight;
         return 
        }

        if (localStorage.getItem("productosZion") === null) {
            console.log(data)            
            data.cantidad = 1
            registro.push(data)
            console.log(registro)
            localStorage.setItem("productosZion", JSON.stringify(registro))
            delayline('<-- '+peticion)
            delayline('> se agrego '+productoUsuario+' a tu pedido')
            
        } else {
            registro = localStorage.getItem("productosZion")
            console.log(registro + 'zion')
            registro = JSON.parse(registro)            

            let producto_nuevo = data.producto

            let comprobacion = registro.find(obj => producto_nuevo === obj.producto)
            if (comprobacion == undefined) {
                data.cantidad = 1
                registro.push(data)
                localStorage.setItem("productosZion", JSON.stringify(registro))

            } else {
                let indiceElementoExistente = registro.findIndex(obj => producto_nuevo === obj.producto)
                comprobacion.cantidad = parseInt(comprobacion.cantidad) + 1
                registro[indiceElementoExistente] = comprobacion
                registro.splice(indiceElementoExistente, 1)
                registro.push(comprobacion)
                localStorage.setItem("productosZion", JSON.stringify(registro))
            }
            console.log("comp", comprobacion)
            delayline('<-- '+peticion)
            delayline('> se agrego '+productoUsuario+' a tu pedido')
        }

        /*---Fin logica agregar productos---*/


      }



    }else if (peticion.slice(0, 8) == 'eliminar'){

      if (peticion == 'eliminar'){

        delayline('<-- eliminar')
        delayline('> escriba el nombre de un producto')

      }else if (peticion.slice(0, 8) == 'eliminar'){

        productoUsuario = peticion.slice(9, peticion.length)
        console.log(productoUsuario)


        /*---Inicio logica eliminar productos---*/
        let data = menulist.find(menu => menu.producto === productoUsuario)

        let registro = []
        if (data == undefined){
          delayline('<-- '+peticion)
          delayline('> el producto "'+productoUsuario+'" no existe')
          document.getElementById("text1").value = ''
          StCom.scrollTop = StCom.scrollHeight;
         return 
        }

        if (localStorage.getItem("productosZion") === null) {
            console.log(data)            
            delayline('<-- '+peticion)
            delayline('> no hay productos en tu pedido')
            
        } else {
            registro = localStorage.getItem("productosZion")
            console.log(registro + 'zion')
            registro = JSON.parse(registro)            

            let producto_eliminar = data.producto

            let comprobacion = registro.find(obj => producto_eliminar === obj.producto)
            if (comprobacion == undefined) {
            	delayline('<-- '+peticion)
	            delayline('> el producto ' + productoUsuario + ' no existe en tu pedido')

            } else {
                let indiceElementoExistente = registro.findIndex(obj => producto_eliminar === obj.producto)

                if (comprobacion.cantidad == 1){
		                registro.splice(indiceElementoExistente, 1)
                    if(registro.length>0){
                      localStorage.setItem("productosZion", JSON.stringify(registro))
                    }else{
                      localStorage.removeItem("productosZion")
                    }
                    

		            }else{
                comprobacion.cantidad = parseInt(comprobacion.cantidad) - 1
                registro[indiceElementoExistente] = comprobacion
                registro.splice(indiceElementoExistente, 1)
                registro.push(comprobacion)
                localStorage.setItem("productosZion", JSON.stringify(registro))
		            }
            }
            console.log("comp", comprobacion)
            delayline('<-- '+peticion)
            delayline('> se elimino '+productoUsuario+' de tu pedido')
        }

        /*---Fin logica eliminar productos---*/


      }



    }else if (peticion == 'mipedido'){

      if (localStorage.getItem("productosZion") === null) {
          delayline('<-- '+peticion)
          delayline('> pedido vacio, agrega productos')
      }
      else{
         registro = localStorage.getItem("productosZion")
         registro = JSON.parse(registro)
         delayline('<-- '+peticion)
         let valorpago = 0
         for(x=0;x<registro.length;x++){
          console.log(registro[x])
          let valor = parseInt(registro[x].cantidad) *  parseInt(registro[x].precio)
          console.log(valor)
          delayline('> '+registro[x].producto + ' cantidad: ' + registro[x].cantidad+ ' Valor: $' + valor )
          valorpago = valorpago + valor
         }
         delayline('> Pago total: $' + valorpago)
      }

    }else if (peticion == 'limpiar'){
      StCom.innerHTML = ``
      delayline('<-- '+peticion)
      
    }else if (peticion == 'cancelarpedido'){

      if (localStorage.getItem("productosZion") === null) {
        delayline('<-- '+peticion)
        delayline('> no hay prodcutos en tu pedido')
      }
      else{
        localStorage.removeItem("productosZion")
        delayline('<-- '+peticion)
        delayline('> pedido borrado')
      }
    }else{
      delayline('<-- '+peticion)
      delayline('> '+ peticion + ', no se recononce como un comando, use "ayuda" para saber mas')
      
      
    }
    document.getElementById("text1").value = ''
    tiempos2=[]
    StCom.scrollTop = StCom.scrollHeight;

                
    })
  }, 6000);

};

function cargar_tiempos(myarreglo, mytiempo){
  let tiempo_ini = 1000

  for(x = 0; x < myarreglo.length; x++){
    
    mytiempo.push(tiempo_ini)
    tiempo_ini = tiempo_ini + 1000
    console.log(tiempo_ini)
  }

}

let colorfuente =''


colorfuente = document.querySelector("#colorfont1")
colorfuente.addEventListener("click", (evento) =>{
  document.documentElement.style.setProperty('--color--path', '#63de00')
  document.getElementById("text1").focus();
})

colorfuente = document.querySelector("#colorfont2")
colorfuente.addEventListener("click", (evento) =>{
  document.documentElement.style.setProperty('--color--path', '#ccde00')
  document.getElementById("text1").focus();
})

colorfuente = document.querySelector("#colorfont3")
colorfuente.addEventListener("click", (evento) =>{
  document.documentElement.style.setProperty('--color--path', '#de1600')
  document.getElementById("text1").focus();
})

colorfuente = document.querySelector("#colorfont4")
colorfuente.addEventListener("click", (evento) =>{
  document.documentElement.style.setProperty('--color--path', '#2500de')
  document.getElementById("text1").focus();
})

colorfuente = document.querySelector("#colorfont5")
colorfuente.addEventListener("click", (evento) =>{
  document.documentElement.style.setProperty('--color--path', '#fff')
  document.getElementById("text1").focus();
})

colorfuente = document.querySelector("#colorfont6")
colorfuente.addEventListener("click", (evento) =>{
  document.documentElement.style.setProperty('--color--path', '#ff00ff ')
  document.getElementById("text1").focus();
})

colorfuente = document.querySelector("#colorfont7")
colorfuente.addEventListener("click", (evento) =>{
  document.documentElement.style.setProperty('--color--path', '#00ffff ')
  document.getElementById("text1").focus();
})