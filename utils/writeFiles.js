import {writeFile} from 'fs/promises'

export const writeProducts = async (data)=> {
    try {
      return await writeFile('./data/products.txt', data)
    } catch (error) {
      console.log(error)
    }
  }