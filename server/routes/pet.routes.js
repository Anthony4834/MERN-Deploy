const PetController = require('../controllers/pet.controller');
const {Pet} = require('../models/pet.model');

module.exports = function(app) {
    app.get('/api/pets', PetController.FindAllPets);
    app.get('/api/pet/:id', PetController.FindOnePet);
    app.post('/api/pets/new', PetController.CreatePet);
    app.put('/api/pet/:id/edit', PetController.FindPetAndEdit);
    app.delete('/api/pet/:id/delete', PetController.FindPetAndDelete);
    app.delete('/api/drop/', PetController.Drop)
}