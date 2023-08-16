let mynumero = document.querySelector("#EJ1")


mynumero.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    if(evento.target.numeroN.value == '' || evento.target.numeroN.value < 0 || evento.target.numeroN.value > 1000000){
        Swal.fire({
            icon: 'error',
            title: 'AH AH AH!!',
            html: 'Selecciona un numero entre <b>1</b> y <b>1.000.000</b>',                       
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
        return;
    }


    let limite = parseInt(evento.target.numeroN.value)
    let suma = 0

    console.log(limite)
    for(let x = 1; x <= limite; x++){
        console.log("el valor de x es " + x )
        suma = suma + x
        console.log("el valor de la suma es " + suma )
        

        
    }
    
    console.log("el valor final de la suma es " + suma )

    Swal.fire({
        icon: 'success',
        title: 'Asi se hace!',
        html: `La suma del numero <b>1</b> hasta el numero <b>${limite}</b> es igual a <b>${suma}</b>`,            
        backdrop: `
            rgba(248, 249, 249, 0.56)
            url("assets/img/Nedry-dennis-fun.gif")
            left center
            no-repeat
        `,
        showClass: {
          popup: 'animate__animated animate__bounceInLeft'
        },
        hideClass: {
          popup: 'animate__animated animate__bounceOutRight'
        }
        ,
        confirmButtonText: 'Genial! 👌',
        confirmButtonColor: '#34495E',

      })


})