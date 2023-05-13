import { User } from "../models/index.js";
import { sequelize } from "../utils/postgresql.js";
await sequelize.sync({ force: false });

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (_, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    res.json(user[1]);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      res.status(404).json("Could not found product");
      return;
    }

    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(`User ${user.firstName} was deleted`);
  } catch (error) {
    console.log(error);
  }
};
