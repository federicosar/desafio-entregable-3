class Saludos {
    contructor(pais, guiño, moneda, idioma) {
        this.pais = pais;
        this.guiño = guiño;
        this.moneda = moneda;
        this.idioma = idioma;
    }
}

const pais1 = new Saludos("argentina", "hola", "peso", "español")
const pais2 = new Saludos("estados unidos", "hello", "dollar", "ingles")
const pais3 = new Saludos("mejico", "hola", "peso", "español")
const pais4 = new Saludos("alaska", "hello", "dolar", "ingles")


let saludos = [pais1, pais2, pais3, pais4]





let contenidoDelInput = document.getElementById("primerInput")


// function saludar() {

//     console.log(saludoUno)
// }

contenidoDelInput.addEventListener('change', () => {

    let buscador = contenidoDelInput.value 

    console.log(buscador.toLowerCase())

    let monedaEnComun = saludos.filter(Saludos => pais.guiño.includes(buscador.toLowerCase()))

    monedaEnComun.forEach(saludos => {
        divSaludos.innerHTML += '
        
        <div>
        
            <h2>pais guiño: ${saludos.moneda}   </h2>

            <p>guiño : ${saludos.guiño}  </p>
        
            <p>moneda : ${saludos.moneda}  </p>
        
            <p>idioma : ${saludos.idioma}  </p> 
        ''    
        
        
        </div>

        
        
        
        
        
         '
    })

})  