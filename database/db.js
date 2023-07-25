const mongoose=require('mongoose');

const connectDB=async(err)=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/ProductsApp')
        console.log("database connected")
        }
    catch{
        console.error(`Error connecting to database ${err}`)
    }

}

module.exports=connectDB;