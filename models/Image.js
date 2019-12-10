const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    updatedTime:{
        type: Date,
        default:Date.now
    }
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;