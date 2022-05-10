class Saludos {
    constructor(pais, guinio, moneda, idioma) {
        this.pais = pais;
        this.guinio = guinio;
        this.moneda = moneda;
        this.idioma = idioma;
    }
}

const pais1 = new Saludos("argentina", "hola", "peso", "español")
const pais2 = new Saludos("estados unidos", "hello", "dollar", "ingles")
const pais3 = new Saludos("mexico", "hola", "peso", "español")
const pais4 = new Saludos("alaska", "hello", "dolar", "ingles")


let saludos = [pais1, pais2, pais3, pais4]





let contenidoDelInput = document.getElementById("primerInput")
let divSaludos = document.getElementById("divSaludos")



contenidoDelInput.addEventListener('change', () => {

    let buscador = contenidoDelInput.value
    console.log(buscador.toLowerCase())
    let monedaEnComun = saludos.filter(pais => pais.guinio.includes(buscador.toLowerCase()))

    monedaEnComun.forEach(saludos1 => {
        divSaludos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Pais: ${saludos1.pais}</h5>
                <p>Saludo: ${saludos1.guinio} </p>
                <p>Moneda: ${saludos1.moneda} </p>
                <p>Idioma: $${saludos1.idioma} </p>
            </div>
        </div>
        `

    })

})