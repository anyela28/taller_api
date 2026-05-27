import { Router } from "express";
import * as productController from "../controller/product.controller.js";
import productScheme from "../schemes/product.schema.js";
import productMiddleware from "../middlewares/product.middleware.js";
import verifyToken from "../middlewares/jwt.middleware.js";

const router = Router();

router.post("/product", productMiddleware(productScheme.createProduct), productController.createProduct);
router.get("/product", verifyToken, productController.showProducts);
router.get("/product/:id", verifyToken, productController.showIdProduct);
router.put("/product/:id", verifyToken, productController.updateProduct);
router.delete("/product/:id", verifyToken, productController.deleteProduct);

export default router;