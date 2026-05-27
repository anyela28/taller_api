import express from "express";
import morgan from "morgan";
import userRouter from "../routers/user.router.js";
import userStatusRouter from "../routers/userStatus.router.js";
import roleRouter from "../routers/role.router.js";
import categoryRouter from "../routers/category.router.js";
import productRouter from "../routers/product.router.js"
import { modelApp } from "../config/models.app.js";

const app = express();

modelApp(true);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1",userRouter);
app.use("/api/v1",userStatusRouter);
app.use("/api/v1",roleRouter);
app.use("/api/v1",categoryRouter);
app.use("/api/v1/", productRouter);

app.use((rep, res, next) => {
    res.status(404).json({
        Message: "Endpoint losses"
    });
});

export default app;