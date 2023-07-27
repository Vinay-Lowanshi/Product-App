const productUpdate=(req,res)=>{
    res.render('update',{name:"Product Update Page",id:req.params.id})
}

module.exports=productUpdate;