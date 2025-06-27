import { DataTypes } from "sequelize";

import { sequelize } from "../config/database";

const book = sequelize.define('Book',{
    id={
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
    title={
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
    author={
        type: DataTypes.STRING,
        allowNull: false,
    }
    pages={
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    genre={
        type: DataTypes.ENUM('Literario'),
        allowNull: false,
    }
    description={
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName:'books',
    timestamps: true,
});

export default book;