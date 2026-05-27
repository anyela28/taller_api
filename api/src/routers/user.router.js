import { Router } from "express";
import userController from "../controller/user.controller.js";
import userScheme from "../schemes/user.schema.js";
import userMiddleware from "../middlewares/user.middleware.js";
import verifyToken from "../middlewares/jwt.middleware.js";

const router = Router();

router.post("/user", userMiddleware(userScheme.createUser), userController.createUser);
// router.post("/userfk", createUserfk);
router.get("/user", verifyToken, userController.showUser);
router.get("/user", verifyToken, userController.showUserId);
router.put("/user", verifyToken, userMiddleware(userScheme.updateUser), userController.updateUser);
router.delete("/user", verifyToken, userController.deleteUser);
router.post("/user/login", userController.loginUser);

export default router;