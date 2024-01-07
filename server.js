'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

// "import bcrypt to server file"
const bcrypt = require('bcrypt');


//START_ASYNC -do not remove notes, place code between correct pair of notes.

// hashing function to encrypt password
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash); // will console log the hashed password

    // compares the users input with hashes password
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log(res); // will indicate true or false
    })
});

//END_ASYNC

//START_SYNC



//END_SYNC



app.listen(process.env.PORT || 3000, () => {});
