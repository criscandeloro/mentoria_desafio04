const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const petController = require('./controllers/petController');

const app = express();
app.use(express.json());

// Configurações do Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Cadastro de Pets - Desafio 04',
            version: '1.0.0',
            description: 'API desenvolvida para a Mentoria Júlio de Lima com regras de peso e idade.',
            contact: { name: 'Cristine Candeloro' }
        },
        servers: [{ url: 'http://localhost:3000' }]
    },
    apis: ['./src/app.js'], // Onde o Swagger vai procurar os comentários
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @openapi
 * /pets:
 *   post:
 *     summary: Cadastra um novo pet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               dono:
 *                 type: string
 *               idade:
 *                 type: integer
 *               peso:
 *                 type: number
 *     responses:
 *       201:
 *         description: Pet cadastrado com sucesso
 *       400:
 *         description: Erro de validação (Peso > 50kg ou Idade < 2 anos)
 */
app.post('/pets', petController.create);

if (require.main === module) {
    app.listen(3000, () => {
        console.log("API rodando na porta 3000");
        console.log("Swagger disponível em http://localhost:3000/api-docs");
    });
}

module.exports = app;