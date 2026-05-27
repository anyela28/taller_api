import { Router } from "express";
import categoryController from "../controller/category.controller.js";
import categoryScheme from "../schemes/category.schema.js";
import categoryMiddleware from "../middlewares/category.middleware.js";
import verifyToken from "../middlewares/jwt.middleware.js";

const router = Router();

router.post("/category", categoryMiddleware(categoryScheme.createCategory), categoryController.createCategory);
router.get("/category", verifyToken, categoryController.showCategory);
router.get("/category/:id", verifyToken, categoryController.showCategoryId);
router.put("/category/:id", verifyToken, categoryMiddleware(categoryScheme.updateCategory), categoryController.updateCategory);
router.delete("/category/:id", verifyToken, categoryController.deleteCategory);

export default router;