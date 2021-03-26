const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pets', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('Successfully established connection to database'))
    .catch(err => console.log('Connection to database failed', err));