import NumerosFileDAO from './numerosFile.js'
import NumerosMemDAO from './numerosMemoria.js'

import config from '../../config.js'

class NumerosFactoryDAO {
    static get(persistencia) {
        switch(persistencia) {
            case 'FILE': return new NumerosFileDAO(config.FILE)
            default: return new NumerosMemDAO()
        }
    }
}

export default NumerosFactoryDAO