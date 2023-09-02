let tonos = [
    {nota: "../assets/aud/nota1.mp3"},
    {nota: "../assets/aud/nota2.mp3"},
    {nota: "../assets/aud/nota3.mp3"},
    {nota: "../assets/aud/nota4.mp3"},
    {nota: "../assets/aud/nota5.mp3"},
    {nota: "../assets/aud/nota6.mp3"},
    {nota: "../assets/aud/nota7.mp3"},
    {nota: "../assets/aud/nota8.mp3"}
]

let keys = [
    {key: 65, letter:"A"},
    {key: 83, letter:"S"},
    {key: 68, letter:"D"},
    {key: 70, letter:"F"},
    {key: 72, letter:"H"},
    {key: 74, letter:"J"},
    {key: 75, letter:"K"},
    {key: 76, letter:"L"}

]



let mipiano = document.querySelector("#piano")
let idcontador = 0

tonos.forEach(element => {  
    
    console.log(keys[idcontador].key)
    mipiano.innerHTML += `
                        <div class="tecla" 
                             data-notas="${idcontador}"
                             onclick="reproducir(${idcontador})">
                             ${keys[idcontador].letter}
                        </div>
                        `
    idcontador = idcontador + 1
});

class nota{
    constructor(misnotas){
        this.misnotas = misnotas;
    }
    tocar(){
        const audio = new Audio(this.nota);
        audio.play();
    }
    traernota(key) {
        console.log(this.misnotas[key])
        const notas = this.tocar.bind(this.misnotas[key]);
        notas();        
      }
}

function reproducir(x){
    console.log(x)
    let tocar = new nota(tonos)
    tocar.traernota(x)
}

window.addEventListener('keydown', function(event) {
    let notakey = keys.findIndex(element => element.key === event.keyCode)
    console.log(notakey)
    if (notakey >= 0){
        reproducir(notakey)
    }
})