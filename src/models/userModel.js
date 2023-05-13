import { Model, DataTypes } from "sequelize";
import { sequelize } from "../utils/postgresql.js";
// import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto'



class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    // id: {
    //   type: DataTypes.STRING,
    //   defaultValue: () => uuidv4(),
    //   primaryKey: true,
    //   allowNull: false,
    // },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

export default User;
