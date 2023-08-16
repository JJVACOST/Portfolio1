let mynumero = document.querySelector("#EJ1")


mynumero.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    console.log(evento.target.Genero.value)
    
    if(evento.target.Edad.value == '' || evento.target.Genero.value ==''){
         Swal.fire({
            icon: 'error',
            title: 'AH AH AH!!',
            html: 'Diligencia todos los <b>campos</b>',                       
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

    if(evento.target.Edad.value == '' || evento.target.Edad.value <= 0){
        Swal.fire({
            icon: 'error',
            title: 'AH AH AH!!',
            html: 'Ingresa una <b>edad</b> valida',                       
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


    myedad = parseInt(evento.target.Edad.value)
    mygenero = parseInt(evento.target.Genero.value)
    console.log(myedad)

    if (myedad > 0 && myedad <= 10){
        Swal.fire({
            icon: 'success',
            title: 'Ganaste!',
            html: `Felicidades Ganaste un Jugo 🥤`,            
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
    }else if (myedad >= 18 && mygenero == 1)
    {
        Swal.fire({
            icon: 'success',
            title: 'Ganaste!',
            html: `Felicidades Ganaste una cerveza 🍻 y una porcion de pizza 🍕 Hawaiana`,            
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
    }else if (myedad >= 18 && mygenero == 2)
    {
        Swal.fire({
            icon: 'success',
            title: 'Ganaste!',
            html: `Felicidades Ganaste una cerveza 🍻 y una porcion de pizza 🍕 tres carnes`,            
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
    }else{
        Swal.fire({
            icon: 'info',
            title: 'Intenta en otro momento!',
            html: `Lo sentimos no tienes premio 😔`,            
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
            confirmButtonText: 'De acuerdo! 👍',
            confirmButtonColor: '#34495E',
    
          })
    }
})