import { readFile, writeFile } from "fs/promises";

export const readProducts = async () => {
  try {
    return await readFile("./db/database.txt", { encoding: "utf-8" });
  } catch (error) {
    await writeFile('./db/database.txt', '[]')
  }
};
