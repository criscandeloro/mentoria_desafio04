const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('Testes da API de Cadastro de Pets', () => {

    it('Deve cadastrar um pet com sucesso', async () => {
        const res = await request(app)
            .post('/pets')
            .send({ nome: "Rex", dono: "Cris", idade: 5, peso: 20 });
        
        expect(res.status).to.equal(201); // Correto para Chai
    });

    it('Não deve cadastrar pet com mais de 50kg', async () => {
        const res = await request(app)
            .post('/pets')
            .send({ nome: "Beethoven", dono: "Lázaro", idade: 4, peso: 60 });
        
        expect(res.status).to.equal(400); // Correto para Chai
        expect(res.body.error).to.equal("A empresa não aceita pets com mais de 50kg.");
    });

    it('Não deve cadastrar pet com menos de 2 anos', async () => {
        const res = await request(app)
            .post('/pets')
            .send({ nome: "Pipoca", dono: "Cris", idade: 1, peso: 5 });
        
        expect(res.status).to.equal(400); // Correto para Chai
        expect(res.body.error).to.equal("A empresa não aceita pets com menos de 2 anos.");
    });
});