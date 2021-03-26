const {res} = require('express');
const {Pet} = require('../models/pet.model');

module.exports.CreatePet = (req, res) => {
    Pet.create(req.body)
        .then(created => res.json({added: created}))
        .catch(err => res.status(400).json(err));
}
module.exports.FindOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(found => res.json({pet: found}))
        .catch(err => res.status(400).json(err));
}
module.exports.FindAllPets = (req, res) => {
    Pet.find().sort({"type": 1})
        .then(found => res.json({pets: found}))
        .catch(err => res.status(400).json(err));
}
module.exports.FindPetAndEdit = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(found => res.json({edited: found}))
        .catch(err => res.status(400).json(err));
}
module.exports.FindPetAndDelete = (req, res) => {
    Pet.findOneAndDelete({_id: req.params.id})
        .then(found => res.json({deleted: found}))
        .catch(err => res.status(400).json(err));
}
module.exports.Drop = (req, res) => {
    Pet.deleteMany({}).then(deleted => res.json({yes: deleted})).catch(err => res.status(400).json(err))
}