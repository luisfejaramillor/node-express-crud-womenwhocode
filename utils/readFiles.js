import {readFile} from 'fs/promises'

export const getProducts =async ()=> {
    try {
      return await readFile('./data/products.txt', {encoding: 'utf-8'})
    } catch (error) {
      console.log(error)
    }
  }