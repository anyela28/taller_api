import Joi from "@hapi/joi";

export default{
    createCategory: Joi.object({
        category_name: Joi.string().required().min(3),
        category_description: Joi.string().min(10),
        category_image_url: Joi.string(),
        parent_id_fk: Joi.number(),
        category_status: Joi.string().valid("activo", "inactivo").required(),
    }),
    updateCategory: Joi.object({
        category_name: Joi.string().min(3),
        category_description: Joi.string().min(10),
        category_image_url: Joi.string(),
        parent_id_fk: Joi.number(),
        category_status: Joi.string().valid("activo", "inactivo"),
    }),
};