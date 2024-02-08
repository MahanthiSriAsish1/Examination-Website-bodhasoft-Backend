const mongoose = require('mongoose')

const dbConnect = (dbName) => {

    const connect_uri = `mongodb+srv://Asish:Asish2002@cluster0.it1lvdq.mongodb.net/${dbName}`;
    mongoose.connect(connect_uri);
    const db = mongoose.connection;
    db.on('connected', () => {
        console.log(`Connected to MongoDB database: ${dbName}`);
    });
    db.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
    });
};

module.exports = dbConnect;
