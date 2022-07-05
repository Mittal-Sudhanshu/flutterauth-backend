const mongoose = require('mongoose');

const mongUrl = "mongodb+srv://sudhanshu:abcdefgh@cluster0.amot8iv.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=> {
    mongoose.connect(mongUrl,()=>{
        console.log("connected to database");
    })
}

module.exports = connectToMongo;