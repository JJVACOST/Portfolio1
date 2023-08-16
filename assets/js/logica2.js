let mynumero = document.querySelector("#EJ1")


mynumero.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    let numero=0

    
    if(evento.target.numeroP.value == '' ){
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


    numero = parseInt(evento.target.numeroP.value)
    
    console.log(evento.target.numeroP.value + "error")

    let residuo = numero%2

    console.log(residuo)

    if (residuo==0){
        resultado = "par"
    }else
    {
        resultado = "impar"
    }

    Swal.fire({
        icon: 'success',
        title: 'Asi se hace!',
        html: `El numero <b>${numero}</b> es <b>${resultado}</b>`,            
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