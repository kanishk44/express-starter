const path = require("path");

const rootDir = require("../util/path");

const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log(products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
