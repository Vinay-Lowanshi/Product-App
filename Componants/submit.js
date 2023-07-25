const { error } = require('console');
const mongoose=require('mongoose');

const productSchema=mongoose.Schema(
    {
        name:String,
        image:String,
        price:Number
    }
)

const product=mongoose.model('product',productSchema);
const submit=async(req,res)=>{
    try{
        console.log(req.body)
        const {productName,productImage,productPrice}=req.body;
        let newProduct=new product(
            {
                name:productName,
                image:productImage,
                price:productPrice
            }
        )
        const result = await newProduct.save()
            console.log(result)
            res.redirect('/product')
    }
    catch{
        console.log(error)
    }
   
}

module.exports={submit,product};

