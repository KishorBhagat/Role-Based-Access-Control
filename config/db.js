const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async (app, port) => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected successfully");
        app.listen(port, () => {
            console.log('Server running at port', port);
        })
    } catch (error) {
        console.log("FAILED to connect database");
    }
}

module.exports = connectDB;