const express = require('express');
const cors = require('cors');
const {urlencoded} = require('express');

const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: true}));
require('./server/routes/pet.routes')(app);

app.listen(port, () => {
    console.log(`Plugged-in to port [${port}]`);
})