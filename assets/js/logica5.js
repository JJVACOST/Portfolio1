let mybtntabla = document.querySelector("#tbMult")
let mytabla = document.querySelector("#tablas")
let mylTotal = document.querySelector("#ltotal")




mybtntabla.addEventListener("click", (evento) =>{
    
    let mynumero = document.getElementById("tablanumero").value
    let myNumResultados = document.getElementById("tablaNresultados").value
    let myhtml = ""
    let myhtmll = ""

    console.log(mynumero)
    console.log(myNumResultados)

    if (mynumero <1 || mynumero >20 || myNumResultados<1 || myNumResultados>500){
          Swal.fire({
            icon: 'error',
            title: 'AH AH AH!!',
            html: 'Solo numeros mayores a 1 😔 <br> Diligencia todos los campos <br> Numero: 1 a 20 <br> Resultados: 1 a 500',                       
            backdrop: `
                rgba(248, 249, 249, 0.56)
                url("assets/img/Nedry-dennis.gif")
                right center
                no-repeat
            `,
            showClass: {
              popup: 'animate__animated animate__bounceInLeft'
            },
            hideClass: {
              popup: 'animate__animated animate__bounceOutRight'
            }
            ,
            confirmButtonText: 'Lo siento! 😒',
            confirmButtonColor: '#34495E',

          })
    }else{
        let result = 0
        let total = 0
        for(x=1; x <= myNumResultados; x++){   
            result = mynumero * x
            total = total + result
            myhtml+=   `<tr><td>${mynumero}</td><td>x</td><td>${x}</td><td>=</td><td>${result}</td></tr>`    
        }
            myhtmll=   `Sumatoria = ${total}`    
            mytabla.innerHTML  = myhtml
            mylTotal.innerHTML = myhtmll
    }    
})

