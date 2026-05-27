import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";

class Product extends Model {}

Product.init({
    product_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    product_description: { 
        type: DataTypes.TEXT,
        allowNull: false
    },
    product_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    product_stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "Categories",
            key: "category_id"
        }
    },
    product_status: {
        type: DataTypes.ENUM("Active", "Inactive", "Out of stock"),
        allowNull: false
    }
},{ sequelize, modelName: "Product" });

export default Product;