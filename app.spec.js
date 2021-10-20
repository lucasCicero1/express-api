const request = require('supertest')
const app = require('./app')
const router = require('./routes/produtos')

describe('testing my server', () => {
    it('Should get my route /produtos/id', async () => {
        const res = await request(app).get('/produtos/:id_produto')
        console.log(res.header)

        expect(res.headers).toHaveProperty('content-type')
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('message')
        expect(res.body.message).toBe('Retorna o Produto id: :id_produto')
    })

    it('Should get my route /pedidos', async () => {
        const res = await request(app).post('/pedidos')

        expect(res.type).toBe('application/json')
        expect(res.body).not.toBe('false')
        expect(res.body).toBeTruthy()
        expect(res.request.method).toBe('POST')
    })
})
