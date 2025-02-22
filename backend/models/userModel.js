const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:[3,"Minimum character should be 3"]

    },
    description:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true

    },
    quantity:{
        type:Number,
        required:true

    }
    

});

module.exports = mongoose.model('User', UserSchema);