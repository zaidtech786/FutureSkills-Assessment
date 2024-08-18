const mongoose  = require("mongoose");

const cardSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},
{timestamps:true}
);

const cardModel = new mongoose.model("Cards",cardSchema);
module.exports = cardModel;