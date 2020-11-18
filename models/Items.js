const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Items extends Model {}

Items.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item_name: {
            type: DataTypes.STRING
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'items'
    }
);

module.exports = Items;