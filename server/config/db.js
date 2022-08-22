const mongoose = require("mongoose");

const connection = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold)
}

module.exports = connection


