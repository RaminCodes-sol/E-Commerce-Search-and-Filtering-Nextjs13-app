'use client'
import { useEffect } from "react";
import Navbar from "./Navbar";
import FilterButtons from "./FilterButtons";
import Product from "./Product";
import { useProductContext } from "../context/ProductContext";





const Products = ({ products }: { products: Product[] }) => {
  const { setProducts, filteredProducts, setFilteredProducts } = useProductContext()
  
  
  useEffect(() => {
    if (filteredProducts.length > 1) {
      setFilteredProducts(filteredProducts)
      return
    }

    if (products && products.length) {
      setProducts(products)
    }
    
  }, [products])

  return (
    <section>
      {/* ----- Navbar ----- */}
      <Navbar />

      {/* ----- Filter Buttons ----- */}
      <FilterButtons products={products}/>

      {/* ----- Products ----- */}
      <div className='w-full grid grid-cols-fluid gap-3 gap-y-5 p-4 px-6 pb-8'>
        { 
          filteredProducts.length > 0 
            ? filteredProducts?.map((product: Product, index: number) => <Product key={index} product={product} />)
            : products?.map((product: Product, index: number) => <Product key={index} product={product} />) 
        }
      </div>
    </section>
  )
}

export default Products