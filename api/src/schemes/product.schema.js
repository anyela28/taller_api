import Joi from "@hapi/joi";

export default{
    createProduct: Joi.object({
        product_name: Joi.string().required(),
        product_description: Joi.string().required().min(5),
        product_price: Joi.number().required().positive().min(0),
        product_stock: Joi.number().required().min(0),
        category_id_fk: Joi.number().required().min(1),
        product_status: Joi.string().valid('Active', 'Inactive', 'Out of stock').required(), 
    }),
    updateProduct: Joi.object({
        product_name: Joi.string(),
        product_description: Joi.string(),
        product_price: Joi.number().positive().min(0),
        product_stock: Joi.number().min(0),
        category_id_fk: Joi.number().min(1),
        product_status: Joi.string().valid('Active', 'Inactive', 'Out of stock'), 
    }),
};