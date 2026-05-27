import productModel from "../models/product.model.js";
import { faker } from "@faker-js/faker";

export const createProduct = async (req, res) => {
    try {
        await productModel.sync();
        const dataProduct = req.body;
        const createProduct = await productModel.create({
            product_name: dataProduct.product_name,
            product_description: dataProduct.product_description,
            product_price: dataProduct.product_price,
            product_stock: dataProduct.product_stock,
            category_id_fk: dataProduct.category_id_fk,
            product_status: dataProduct.product_status,
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Product created :)",
            id: createProduct.product_id,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};

export const showProducts = async (req, res) => {
    try {
        await productModel.sync();
        const showProducts = await productModel.findAll({
            include: [
                {
                    association: "category"
                }
            ]
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: "All Products :)",
            data: showProducts,
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};

export const showIdProduct = async (req, res) => {
    try {
        await productModel.sync();
        const idProduct = req.params.id;
        const showIdProduct = await productModel.findOne({
            where: {
                product_id: idProduct,
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Showed Id Product :)",
            data: showIdProduct,
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        await productModel.sync();
        const dataProduct = req.body;
        const idProduct = req.params.id;
        const updateProduct = await productModel.update({
            product_name: dataProduct.product_name,
            product_description: dataProduct.product_description,
            product_price: dataProduct.product_price,
            product_stock: dataProduct.product_stock,
            category_id_fk: dataProduct.category_id_fk,
            product_status: dataProduct.product_status,
        },{
            where: {
                product_id: idProduct,
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Updated Product :)",
            data: updateProduct,
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        await productModel.sync();
        const idProduct = req.params.id;
        const deleteProduct = await productModel.destroy({
            where: {
                product_id: idProduct,
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Deleted Product :)",
            data: deleteProduct,
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};