let pets = [];

const save = (pet) => {
    const novoPet = { id: pets.length + 1, ...pet };
    pets.push(novoPet);
    return novoPet;
};

module.exports = { save };