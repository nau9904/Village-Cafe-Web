const productModel = require("../models/products");

//Product API
class productController {
  //[GET]/product
   async showProduct(req, res) {
   await productModel.find({}).then((data) => res.send(JSON.stringify(data)));
  }

  //[POST] /newproduct
  async newProduct(req, res) {
    const data = await productModel(req.body);
    console.log(req.session);
    productModel
      .create(data)
      .then(res.send({ message: "Upload successfully" }))
      .catch((err) => res.send(err));
  }
}

module.exports = new productController();
