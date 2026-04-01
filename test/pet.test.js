const request = require('supertest');
const app = require('../src/app'); 

describe('Testes da API de Cadastro de Pets', () => {
    
    test('Deve cadastrar um pet com sucesso', async () => {
        const res = await request(app)
            .post('/pets')
            .send({ nome: "Rex", dono: "Cris", idade: 5, peso: 20 });
        
        expect(res.statusCode).toEqual(201);
        expect(res.body.nome).toBe("Rex");
    });

    test('Não deve cadastrar pet com mais de 50kg', async () => {
        const res = await request(app)
            .post('/pets')
            .send({ nome: "Beethoven", dono: "Lázaro", idade: 4, peso: 60 });
        
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toBe("A empresa não aceita pets com mais de 50kg.");
    });

    test('Não deve cadastrar pet com menos de 2 anos', async () => {
        const res = await request(app)
            .post('/pets')
            .send({ nome: "Pipoca", dono: "Cris", idade: 1, peso: 5 });
        
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toBe("A empresa não aceita pets com menos de 2 anos.");
    });
});