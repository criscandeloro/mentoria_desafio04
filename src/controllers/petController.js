const petService = require('../services/petService');

const create = (req, res) => {
    try {
        const petCriado = petService.cadastrarPet(req.body);
        return res.status(201).json(petCriado);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { create };