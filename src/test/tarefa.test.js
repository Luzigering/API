
import request from 'supertest'

import app from '../app.js'

describe('GET /livro', ()=>{
    test('Se o status é 200', ()=>{
        return request(app).get('/livro')
        .then((response)=>{
            console.log(response)
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('POST /livro', ()=>{
    test('Se o body existe', ()=>{

        return request(app).post('/livro')
        .send({
            "titulo" : "titulo",
            "descricao" : "descricao",
            "status" : "A fazer",
            "idUsuario": 1
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.mensagem).toBeTruthy()
        })   
    })

    test('Status invalido', ()=>{
        return request(app).post('/tarefa')
        .send({
            "titulo" : "titulo",
            "descricao" : "descricao",
            "status" : "status errado",
            "idUsuario": 1
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.erro).toBeTruthy()
        }) 
    })

})