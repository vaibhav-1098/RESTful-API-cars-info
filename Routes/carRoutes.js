const express = require("express");
const router = express.Router();
const carControllers = require("../Controllers/carControllers");

router.get("/api/products", carControllers.getAllProducts);
router.post("/api/products/new", carControllers.createNewProduct);
router.get("/api/products/:id", carControllers.getProductWithId);
router.patch("/api/products/:id", carControllers.updateProductWithId);
router.delete("/api/products/:id", carControllers.deleteProductWithId);
router.get("/api/products/company/:company", carControllers.getProductWithCompanyName);

module.exports = router;
