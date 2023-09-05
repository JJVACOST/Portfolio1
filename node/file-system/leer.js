const fs = require('fs')

fs.readFile("./archivo.txt", (error, data) =>{
    if(error){
        console.log(error)
    }else{
        let log = data.toString()
        console.log(log)
    }
} )