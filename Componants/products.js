const {product}=require('../Componants/submit.js')
const products=async(req,res)=>{
    const result=await product.find().sort({_id:-1})

    res.render('product',{result:result,name:"Products Page",collection:product})
}

module.exports=products;