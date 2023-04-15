import { readFile } from "fs/promises";

export const readProducts = async () => {
  try {
    return await readFile("./db/database.txt", { encoding: "utf-8" });
  } catch (error) {
    console.log(error);
  }
};
