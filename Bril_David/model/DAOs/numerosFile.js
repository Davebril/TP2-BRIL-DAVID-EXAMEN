import fs from 'fs'

class NumerosFileDAO {

    constructor(file) {
        this.file = file
    }

    guardarNumero = async numero => {
        try {
            let numeros = await this.obtenerNumeros()
            numeros.push(numero)
            await fs.promises.writeFile(this.file, JSON.stringify(numeros))
            return numero
        }
        catch(error) {
            console.log('error en guardarNumero:',error.message)
            return undefined
        }
    }

    obtenerNumeros = async () => {
        try {
            let numeros = JSON.parse(await fs.promises.readFile(this.file))
            return numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros', error.message)
            return []
        }
    }
}

export default NumerosFileDAO