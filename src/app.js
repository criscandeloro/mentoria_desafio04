const express = require('express');
const app = express();
app.use(express.json());

// Banco de dados em memória
let pets = [];

app.post('/pets', (req, res) => {
    const { nome, dono, idade, peso } = req.body;

    // Regras de Negócio
    if (peso > 50) {
        return res.status(400).json({ error: "A empresa não aceita pets com mais de 50kg." });
    }

    if (idade < 2) {
        return res.status(400).json({ error: "A empresa não aceita pets com menos de 2 anos." });
    }

    // Cadastro
    const novoPet = { id: pets.length + 1, nome, dono, idade, peso };
    pets.push(novoPet);

    return res.status(201).json(novoPet);
});

const PORT = 3000;

if (require.main === module) {
    app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
}
module.exports = app; // Exportado para os testes