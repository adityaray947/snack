const mongoose = require("mongoose");
const URI = "mongodb+srv://ajha70227:Kndz36esQuV8PENr@cluster0.0xn2vnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1); 
    }
};

module.exports = connectDB;
