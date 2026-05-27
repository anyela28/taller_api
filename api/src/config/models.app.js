import sequelize from "../config/connect.db.js";
import UserStatus from "../models/userStatus.model.js";
import Role from "../models/role.model.js";
import User from "../models/user.model.js";
import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

export const modelApp = function initModels(select){

    if (select) {

        UserStatus.hasMany(User, {
            foreignKey: {
                name: "userStatus_fk", 
                field: "userStatus_fk", 
                allowNull: true 
            }
        });

            User.belongsTo(UserStatus, {
                foreignKey: {
                    name: "userStatus_fk", 
                    field:"userStatus_fk", 
                    allowNull: true
                },
                constraints: true,
            });

            Role.hasMany(User, { 
                foreignKey: {
                    name: "role_fk", 
                    field: "role_fk", 
                    allowNull: true
                }
            });

            User.belongsTo(Role, {
                as: 'Current',
                foreignKey: {
                    name: "role_fk", 
                    field: "role_fk", 
                    allowNull: true
                },
                constraints: true,
            });


        Category.hasMany(Category, {
            as: 'subcategories',
            foreignKey: {
                name: "parent_id_fk",
                field: "parent_id_fk",
                allowNull: true
            },
        });

        Category.belongsTo(Category, {
            as: 'parentCategory',
            foreignKey: {
                name: "parent_id_fk",
                field: "parent_id_fk",
                allowNull: true
            },
            constraints: true
        });

        Category.hasMany(Product, {
            as: "products",
            foreignKey: {
                name: "category_id_fk",
                field: "category_id_fk",
                allowNull: true
            },
        });

        Product.belongsTo(Category, {
            as: "category",
            foreignKey: {
                name: "category_id_fk",
                field: "category_id_fk",
                allowNull: true
            },
            constraints: true
        });

        sequelize.sync();
    }
};