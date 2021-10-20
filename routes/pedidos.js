const { Router } = require('express')
const router = new Router()

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Retorna os pedidos'
    })
})

router.get('/:id_pedido', (req, res) => {
    const id = req.params.id_pedido
    
    res.status(200).send({
        message: `Pedido de nº ${id}`
    })
})

router.post('/', (req, res) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        message: 'Pedido foi criado',
        pedidoCriado: pedido
    })
})

router.delete('/', (req, res) => {
    res.status(201).send({
        message: 'Pedidos Excluidos'
    })
})

router.delete('/:index', (req, res) => {
    const index = req.params.index

    res.status(201).send({
        message: `Pedido nº ${index} Excluido`,
    })
})

module.exports = router