const Product = require("../models/Product");

// create product service
module.exports.postProductService = async (data) => {
  const result = await Product.create(data);
  return result;
};

// get product service
module.exports.getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

// get product service Id
module.exports.getProductServiceId = async (productId) => {
  const product = await Product.find({ _id: productId });
  return product;
};

// update product service
module.exports.updateProductService = async (req) => {
  const updateProduct = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  return updateProduct;
};
