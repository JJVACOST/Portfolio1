const fs = require('fs')

fs.writeFile("./archivo.txt", "Hola gente", (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log('archivo creado')
    }
    

} )

