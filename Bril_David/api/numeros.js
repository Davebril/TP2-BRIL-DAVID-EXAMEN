import NumerosFactoryDAO from '../model/DAOs/numerosFactory.js'
import config from '../config.js'

class ApiNumeros {

    constructor() {
        this.Numeros = NumerosFactoryDAO.get(config.PERSISTENCIA)
    }

    async obtenerNumeros() { 
        let numeros = await this.Numeros.obtenerNumeros()
        return numeros
    }

    async guardarNumero(numero) { 
        return await this.Numeros.guardarNumero(numero) 
    }

    async obtenerPromedio() {
        try {
            let numeros = await this.Numeros.obtenerNumeros()
            let sum = 0
            let cant = numeros.length
            for(let i=0; i<cant; i++) {
                sum += numeros[i]
            }
            let promedio = undefined
            if(cant) promedio = sum / cant
            return promedio
        }
        catch(error) {
            console.log('error en: obtenerPromedio API', error)
        }
    }

    async obtenerMinMax() {
        try {
            let numeros = await this.Numeros.obtenerNumeros()
            let min = numeros[0]
            let max = numeros[0]
            let cant = numeros.length
            
            for(let i=0; i<cant; i++) {
                if(numeros[i] > max) max = numeros[i]
                if(numeros[i] < min) min = numeros[i]
            }
            return { min, max }
        }
        catch(error) {
            console.log('error en: obtenerMinMax API', error)
        }
    }

    async obtenerCantidad() {
        try {
            let numeros = await this.Numeros.obtenerNumeros()
            let cantidad = numeros.length
            return cantidad
        }
        catch(error) {
            console.log('error en: obtenerCantidad API', error)
        }
    }
}

export default ApiNumeros
