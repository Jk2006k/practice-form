const mongoose=require('mongoose');

const connnectDb=async()=>{
    try{
        mongoose.connect('mongodb+srv://kishoore004:123@review-9.momqb.mongodb.net/practice')
        console.log("connected sucessfully")
    }catch(error){
        console.error(error.message)

    }
}

module.exports=connnectDb;



