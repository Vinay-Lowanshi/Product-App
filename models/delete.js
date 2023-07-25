// delete.js
const { Product } = require('../Componants/submit.js');

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(req.params.id)
  try {
    // Find the product by its ID and delete it from the database
    await Product.deleteOne({_id:productId});
    res.redirect('/products'); // Redirect to the products page (or any other desired page)
  } catch (error) {
    
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  }
};

module.exports = deleteProduct;
