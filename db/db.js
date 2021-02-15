const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log('Database Connected')
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
} 

module.exports = connectDB;