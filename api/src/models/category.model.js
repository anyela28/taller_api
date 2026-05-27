import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";

class Category extends Model {}

Category.init({
    category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    category_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    category_image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    parent_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "Categories",
            key: "category_id"
        }
    },
    category_status: {
        type: DataTypes.ENUM("activo", "inactivo"),
        allowNull: false
    }
},{
    sequelize, modelName: "Category"
});

export default Category;