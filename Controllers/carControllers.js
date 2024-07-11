const Product = require("../Models/carModels");

// to restrict changes
const allowOnlyGet = (req, res, next) => {
  if (req.method == "GET") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden" }); 
  }
};

// API ROUTES

const getAllProducts = async (req, res) => {
  try {
    const myData = await Product.find(req.query);
    res.status(200).json(myData);
  } catch {
    res.status(500).json({ message: "products not found" });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const myData = await Product.create(req.body);
    res.status(201).json({ created: true, myData });
  } catch {
    res.status(500).json({ message: "product not created" });
  }
};

const getProductWithId = async (req, res) => {
  try {
    const myData = await Product.findById(req.params.id);
    res.status(200).json(myData);
  } catch {
    res.status(500).json({ message: "product not found" });
  }
};

const updateProductWithId = async (req, res) => {
  try {
    const myData = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json({ updated: true, myData });
  } catch {
    res.status(500).json({ message: "product not found" });
  }
};

const deleteProductWithId = async (req, res) => {
  try {
    const myData = await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({ deleted: true, myData });
  } catch {
    res.status(500).json({ message: "product not found" });
  }
};

const getProductWithCompanyName = async (req, res) => {
  try {
    if (["Maruti", "Honda", "Tata"].includes(req.params.company)) {
      const myData = await Product.find({ company: req.params.company });
      res.status(200).json(myData);
    } else {
      res.status(404).json({ message: "no such company" });
    }
  } catch {
    res.status(500).json({ message: "product not found" });
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  getProductWithId,
  updateProductWithId,
  deleteProductWithId,
  getProductWithCompanyName,
  allowOnlyGet,
};
