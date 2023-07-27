const { product } = require('../Componants/submit.js');

const productUpdate=async(req,res)=>{
        await product.findByIdAndUpdate(req.body.productid,
                {
                        name:req.body.productName,
                        price:req.body.productPrice,
                        image:req.body.productImage

                },{new:true}
                        
                )
                console.log("data updated Successfully")
                        res.redirect('/product')
                
}
module.exports=productUpdate;
