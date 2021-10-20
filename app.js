const express = require('express')
const produtos = require('./routes/produtos')
const pedidos = require('./routes/pedidos')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

class AppController {
    constructor(){
        this.express = express()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(bodyParser.json())
        this.express.use(morgan('dev'))
        this.express.use(cors())
    }

    routes(){
        this.express.use('/pedidos', pedidos)
        this.express.use('/produtos', produtos)
    }

}

module.exports = new AppController().express