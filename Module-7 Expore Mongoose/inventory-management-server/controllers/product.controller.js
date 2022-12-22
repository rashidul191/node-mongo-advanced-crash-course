const {
  postProductService,
  getProductsService,
  getProductServiceId,
  updateProductService,
} = require("../services/product.service");

// posting to database
exports.postProducts = async (req, res, next) => {
  try {
    // console.log(req.body);
    // save or create
    // save way
    /* const product = new Product(req.body);
      // instance creating ==> Do something ==> save()
      if(product.quantity === 0){
      product.status = 'out-of-stock'
      }
      const productResult = await product.save(); */

    // create way
    const productResult = await postProductService(req.body);
    productResult.logger();

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: productResult,
    });
  } catch (error) {
    next(error);
    res.status(400).send({
      status: "fail",
      message: "Data is not insert",
      error: error.message,
    });
  }
};

// app.get("/api/v1/product");
exports.getProducts = async (req, res, next) => {
  try {
    // query all product data from database
    const productResult = await getProductsService();
    // status value find query
    // const query = { status: { $ne: "out-of-stack" } };
    // unit value find query
    //const query = { unit: { $eq: "pcs" } };
    // quantity
    //const query = { quantity: { $gt: 100 } };
    //const query = { quantity: { $gte: 100 } };
    //const query = { quantity: { $lte: 100 } };
    // in operator
    //const query = { name: { $in: ["Phone", "Pen"] } };
    // const productResult = await Product.find(query);
    // projection

    // const findProjection = "name quantity";
    //const findProjection = "-name -quantity";
    //const productResult = await Product.find({}, findProjection);
    // limit method
    //const productResult = await Product.find({}).limit(5);
    // sort method big to small
    //const productResult = await Product.find({}).sort({ quantity: -1 });
    // sort method small to big
    // const productResult = await Product.find({}).sort({ quantity: 1 });
    // select method
    //const productResult = await Product.find({}).select({ name: 1 });

    // where method
    // const productResult = await Product.where("name").equals("Phone")
    // const productResult = await Product.where("name").equals("Pen").where("quantity").gt(100);
    // allow any name = /\w/
    // const productResult = await Product.where("name").equals(/\w/).limit(2);
    res.status(200).json({
      status: "success",
      message: "Successfully Product found",
      data: productResult,
    });
  } catch (error) {
    next();
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

// getting data from database of id
module.exports.getProductOfId = async (req, res, next) => {
  try {
    // use find method only id
    //const productResult = await Product.find({ _id: req.params.id });
    const productResult = await getProductServiceId(req.params.id);
    // use findById method
    // const productResult = await Product.findById(req.params.id);

    //const query = { _id: req.params.id, name: "Pen" };
    // or operator
    // const query = { $or: [{ _id: req.params.id }, { name: "Pencil" }] };
    // and operator
    // const query = { $and: [{ _id: req.params.id }, { name: "Phone" }] };
    //const productResult = await Product.find(query);

    res.status(200).json({
      status: "success",
      message: "Successfully Product found",
      data: productResult,
    });
  } catch (error) {
    next();
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

// update product user patch() method
module.exports.updateProduct = async (req, res, next) => {
  try {
    const updateProduct = await updateProductService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully update product",
      data: updateProduct,
    });
  } catch (error) {
    next();
    res.status(400).json({
      status: "fail",
      message: "Couldn't update product the data",
      error: error.message,
    });
  }
};
