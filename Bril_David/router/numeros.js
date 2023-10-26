import express from 'express'
const router = express.Router()

import ControladorNumeros from '../controlador/numeros.js'

class RouterNumeros {

    constructor() {
        this.controladorNumeros = new ControladorNumeros()
    }

    start() {
        router.post('/entrada', this.controladorNumeros.guardarNumero)

        router.get('/entrada', this.controladorNumeros.obtenerNumeros)
        router.get('/promedio', this.controladorNumeros.obtenerPromedio)
        router.get('/minmax', this.controladorNumeros.obtenerMinMax)
        router.get('/cantidad', this.controladorNumeros.obtenerCantidad)

        return router
    }
}

export default RouterNumeros