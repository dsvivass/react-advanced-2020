import { useState, useEffect } from 'react';

export const useFetch = (url) => { // Si vamos a usar hooks dentro de esta funcion
                        // debemos ponerle el use porque sino arrojara error
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [url])

    return {loading, products}
};
