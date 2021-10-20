const { Router } = require('express')
const router = new Router()

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Retorna todos os Produtos'
    })
})

router.post('/', (req, res) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        message: 'Produto Inserido',
        produtoCriado: produto
    })
})

router.get('/:id_produto', (req, res) => {
    const id = req.params.id_produto

    res.status(200).send({
        message: `Retorna o Produto id: ${id}`
    })
})

router.put('/', (req, res) => {
    res.status(201).send({
        message: 'Produto Alterado'
    })
})

router.delete('/', (req, res) => {
    res.status(201).send({
        message: 'Produto Excluido'
    })
})

module.exports = router