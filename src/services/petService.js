const petModel = require('../models/petModel'); 

const cadastrarPet = (dadosPet) => {
    const { peso, idade } = dadosPet;
    if (peso > 50) throw new Error("A empresa não aceita pets com mais de 50kg.");
    if (idade < 2) throw new Error("A empresa não aceita pets com menos de 2 anos.");

    return petModel.save(dadosPet);
};

module.exports = { cadastrarPet };