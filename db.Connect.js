const mongoose = require('mongoose');

const URL = 'mongodb+srv://root:3X9QeRK6NJgcGUZp@cluster0.t0zvzrb.mongodb.net/ppcm-resume';

mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful')
})
connection.on('error', (error) => {
    console.log(error)
})