export const getAllProducts = async () => {

    const url = 'http://localhost:300/products'
    const response = await fetch (url)
    const products = await response.json()

    return products
}