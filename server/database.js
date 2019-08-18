const mongoose = require('mongoose');

const URI = 'mongodb://mongo-db-server/project1';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

//var db = mongoose.connection;
//db.on('error', () => {
//    throw new Error('Unable to connect to database at ' + URI);
//});

module.exports = mongoose;