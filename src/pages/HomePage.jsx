import React from "react";
import { useEffect, useState } from "react";

import { fetchProducts } from "../utils/fetchProducts";

import CardComponent from "../components/CardComponent"

const HomePage = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProducts = async () => {
         try {
          const data = await fetchProducts()
          setProducts(data) // this may change dependeing on your data
         } catch (error) {
            console.log(error)
            setError(error.toString())
         } finally {
            setLoading(false)
          }
        }
        loadProducts()
       }, [])
      
      // evaluate for loading or errors
       if (loading) return <p>Loading...</p>
       if (error) return <p>{error}</p>
       if (!products.length) return <p>No products found</p>
        
       // ✅ Render products when available
       return (
        <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((product, index) => (
                <CardComponent
                key={index}
                title={product.brand + " " + product.model}
                price={product.price}
                stock={product.stock}
                images={product.images[0]}
                />
            ))}
        </section>
       )
}

export default HomePage


