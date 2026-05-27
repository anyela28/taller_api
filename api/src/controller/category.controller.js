import categoryModel from "../models/category.model.js";
import { faker } from "@faker-js/faker";

export const createCategory = async (req, res) => {
    try {
        await categoryModel.sync();
        const dataCategory = req.body;
        const createCategory = await categoryModel.create({
            category_name: dataCategory.category_name,
            category_description: dataCategory.category_description,
            category_image_url: dataCategory.category_image_url,
            parent_id_fk: dataCategory.parent_id_fk,
            category_status: dataCategory.category_status,
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Create Category :)",
            id: createCategory.category_id,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
            error: error.message,
        });
    }
};

export const showCategory = async (req, res) => {
    try {
        await categoryModel.sync();
        const showCategories = await categoryModel.findAll({
            include: [
                {
                    association: "parentCategory"
                },
                {
                    association: "subcategories"
                },
                {
                    association: "products"
                }
            ]
        });

        res.status(200).json({
            ok: true,
            status: 200,
            message: "Show Category :)",
            data: showCategories,
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};

export const showCategoryId = async (req, res) => {
    try {
        await categoryModel.sync();
        const idCategory = req.params.id;
        const showIdCategory = await categoryModel.findOne({
            where: {
                category_id: idCategory
            },
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Show Category Id :)",
            body: showIdCategory,
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};

export const updateCategory = async (req, res) => {
    try {
        await categoryModel.sync();
        const dataCategory = req.body;
        const idCategory = req.params.id;
        const updateCategory = await categoryModel.update({
            category_name: dataCategory.category_name,
            category_description: dataCategory.category_description,
            category_image_url: dataCategory.category_image_url,
            parent_id_fk: dataCategory.parent_id_fk,
            category_status: dataCategory.category_status,
        },{
            where: {
                category_id: idCategory,
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Update Category :)",
            data: updateCategory,
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        await categoryModel.sync();
        const idCategory = req.params.id;
        const deleteCategory = await categoryModel.destroy({
            where: {
                category_id: idCategory,
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Delete Category :)",
            data: deleteCategory,
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500,
        });
    }
};

const categoryController = {
    createCategory, showCategory, showCategoryId, updateCategory, deleteCategory
};

export default categoryController;