const mongoose = require('mongoose');

const uri = //Contact admin for the mongoDB url or paste your own link. Make sure to use MongoDB Atlas

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error(error);
    }
}

connect();

require('./admin.model');
