const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    }catch(error) {
        console.log(error, 'Error connecting to MongoDB');
        throw new Error(error);
    }
}

module.exports = { dbConnection };