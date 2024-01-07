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

// Async hashing function to encrypt password
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash); // will console log the hashed password

    // compares the users input with hashes password
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log(res); // will indicate true or false
    })
});

//END_ASYNC

//START_SYNC

// sync hashing function to encrypt passwords, may cause lagon server side with high cost
var hash = bcrypt.hashSync(myPlaintextPassword,saltRounds);
console.log(hash); // logs the hashed password

// compares the users input with the hashed passowrd
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result); // will log true or false if password is the same

//END_SYNC



app.listen(process.env.PORT || 3000, () => {});
