
export const getProductById = (id, products)=> {
    return products.find(e=> e.id === id)
}

