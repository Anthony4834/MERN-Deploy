const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be more than 2 characters']
    },
    type: {
        type:String,
        required: [true, 'Type is required'],
        minlength: [3, 'Type must be more than 2 characters']
    },
    desc: {
        type:String,
        required: [true, 'Description is required'],
        minlength: [3, 'Description must be more than 2 characters']
    },
    skills: {
        skillOne: String,
        skillTwo: String,
        skillThree: String
    },
    likes: {
        type: Number,
        default: 0
    }
})

module.exports.Pet = mongoose.model("Pet", PetSchema);