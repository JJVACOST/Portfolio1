class persona {
    
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    verpersona(){
        let ver = this.nombre + ' tiene ' + this.edad + ' años y trabaja como ' + this.profesion;
        return  ver;
    }

}


const persona1 = new persona('ana', 41, 'Mesera');
const persona2 = new persona('miguel', 26, 'Especialista');



console.log(persona1.verpersona());
console.log(persona2.verpersona());

let ex11 = document.getElementById("ej1-1")
let ex12 = document.getElementById("ej1-2")
let ex12r1= `Persona1 => ${persona1.verpersona()}`
let ex11r1= `Persona2 => ${persona2.verpersona()}`

ex11.innerHTML += ex11r1
ex12.innerHTML += ex12r1


class vehiculo{

    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    arrancar(){
        let arranca = 'El vehiculo esta encendido' 
        return  arranca
        
    }

    detener(){
        let detiene = 'El vehiculo esta detenido' 
        return  detiene
   }
  
}


class coche extends vehiculo{
    
    constructor(marca, modelo, color){
        super(marca, modelo, color)

    }
    
    acelerar(){
        let acelera = 'El vehiculo esta acelerando'
        return acelera
    }

    descripcion(){
        let descrip = 'tu vehiculo es de la marca ' + this.marca + ' Color ' + this.color + ' y modelo ' + this.modelo
        return descrip 

    }
}

const micarrro1 = new coche('Pegout','86','Negro')


console.log(micarrro1.descripcion())
console.log(micarrro1.acelerar())


let ex21 = document.getElementById("ej2-1")
let ex22 = document.getElementById("ej2-2")
let ex21r1= `micarro => ${micarrro1.descripcion()}`
let ex22r1= `micarro acelerar => ${micarrro1.acelerar()}`

ex21.innerHTML += ex21r1
ex22.innerHTML += ex22r1



class CuentaBancaria{
    constructor(saldo, numcuenta, tipocuenta){
        this.saldo = saldo;
        this.numcuenta = numcuenta;
        this.tipocuenta =  tipocuenta; 
    }

    depositar(monto){
        this.saldo += monto 
    }

    retirar(monto){
        if(monto>this.saldo){
            return 'El saldo es insuficiente revise su saldo'
        }else {
            this.saldo -= monto
            return 'retiro exitoso por $' + this.saldo
        }         
    }

    versaldo(){
        return this.saldo
    }

    detallecuenta(){
        let detalle = 'La cuenta ' + this.numcuenta + ' tipo ' + this.tipocuenta + ' tiene saldo = ' + this.saldo
        return detalle
    }

}

const micuenta = new CuentaBancaria(1000, 'C-001', 'Corriente')

micuenta.depositar(500)

micuenta.saldo = 800

let ex31 = document.getElementById("ej3-1")
let ex32 = document.getElementById("ej3-2")
let ex31r1= `detalle de la cuenta => ${micuenta.detallecuenta()}`
let ex32r1= `ver saldo => ${micuenta.versaldo()}`

ex31.innerHTML += ex31r1
ex32.innerHTML += ex32r1


class figura {
    constructor(){}
    calcularArea(){        
    }
}

class circulo extends figura{
    constructor(){
        super()
    }

    calcularArea(radio){
        let area = Math.PI * Math.pow(radio,2)
         
        return area.toFixed(2)
        
    }
}


class rectangulo extends figura{
    constructor(){
        super()
    }

    calcularArea(alto, ancho){
        let area = alto * ancho
        return area.toFixed(2)
    }
}

const micirculo = new circulo()

const mirectangulo = new rectangulo()

console.log(micirculo.calcularArea(2))
console.log(mirectangulo.calcularArea(5,3))


let ex41 = document.getElementById("ej4-1")
let ex42 = document.getElementById("ej4-2")
let ex41r1= `el area del circulo es => ${micirculo.calcularArea(2)}`
let ex42r1= `el area del rectangulo es => ${mirectangulo.calcularArea(5,3)}`

ex41.innerHTML += ex41r1
ex42.innerHTML += ex42r1



class direccion {
    constructor(calle,ciudad,codigoPostal){
     this.calle = calle;
     this.ciudad = ciudad;
     this.codigoPostal = codigoPostal; 
    }
}


class personanew {
        constructor(nombre, identidad, direccion){
            this.nombre = nombre;
            this.identidad = identidad;
            this.direccion = direccion;
        }


}
let x = new direccion(86,'bogota', 110502)
const mipersona1 = new personanew('Alex',1010105,x)


console.log(mipersona1)

let ex51 = document.getElementById("ej5-1")

let ex51r1= `La persona y su direccion es => ${JSON.stringify(mipersona1)}`

 ex51r1+= `<br>La persona y su direccion es => ${mipersona1.direccion.calle}`

ex51.innerHTML += ex51r1


const micuenta2 = new CuentaBancaria(1000, 'C-002', 'Ahorros')

const micuenta3 = new CuentaBancaria(1000, 'C-003', 'CDT')



let ex61 = document.getElementById("ej6-1")
let ex62 = document.getElementById("ej6-2")

let ex61r1= `Retiro de la cuenta2 => ${micuenta2.retirar(1500)}`
let ex62r1= `Retiro de la cuenta3 => ${micuenta3.retirar(500)}`

ex61.innerHTML += ex61r1
ex62.innerHTML += ex62r1


class animal {
    constructor(voz){
        this.voz = voz;
    }
    hablar(){
        return 'con este metodo el animal habla'
    }
}

class gato extends animal{
    constructor(voz){
        super(voz)
    }

    hablar(){
        return Swal.fire(`el animal dice ${this.voz}`)
    }
}

class perro extends animal{
    constructor(voz){
        super(voz)
    }

    hablar(){
        return Swal.fire(`el animal dice ${this.voz}`)
    }
}



let bt_anim1 = document.getElementById('an1')

bt_anim1.addEventListener('click',() => {
    let g = new gato('miau') 
    g.hablar()
})


let bt_anim2 = document.getElementById('an2')

bt_anim2.addEventListener('click',() => {
    let p = new perro('guau') 
    p.hablar()
})
