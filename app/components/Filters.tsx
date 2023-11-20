'use client'
import { useEffect, useRef, useState } from "react";
import CategoryFilters from "./CategoryFilters";
import PriceFilters from "./PriceFilters";
import ColorFilters from "./ColorFilters";
import { useProductContext } from "../context/ProductContext";
import { FaShopify } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";




// Categories for filtering
const categories = ["All", "Sneakers", "Flats", "Sandals", "Heels"]
const prices = ["All", "$0-50", "$50-100", "$100-150", "Over $150"]
const colors = ["All", "Black", "Blue", "Red", "Green", "White"]




const Filters = () => {
  const [category, setCategory] = useState('')
  const { handleFilterByCategory, handleFilterByPrice, handleFilterByColor, isOpen, setOpen } = useProductContext()
  const idRef = useRef<string>('')


  // Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value)
    idRef.current = e.target.id
    setOpen(false)
  }
  

  // Filter products whenever category changes
  useEffect(()=> {
    if (idRef.current === "category") {
      handleFilterByCategory(category)
    } else if (idRef.current === "price") {
      handleFilterByPrice(category)
    } else if (idRef.current === "color") {
      handleFilterByColor(category)
    }
  }, [category])



  return (
    <aside className={`${!isOpen && 'hidden'} w-full h-screen fixed sm:flex sm:relative bg-white z-10 sm:h-auto border-r flex-col pl-10 sm:pl-4 sm:pr-12 py-3`}>

      {/* ----  Logo ---- */}
      <section className="w-full flex justify-between sm:justify-center items-center pr-5 sm:pr-0 py-0 pt-1 sm:pt-0 sm:py-2">
        <h1 className="text-3xl"><FaShopify /></h1>
        <button onClick={() => setOpen(false)} className="text-4xl flex sm:hidden"><IoClose /></button>
      </section>

      {/* ---- Filters ---- */}
      <section className='my-4 flex flex-col space-y-3'>
        <CategoryFilters categories={categories} handleChange={handleChange} />
        <PriceFilters prices={prices} handleChange={handleChange} />
        <ColorFilters colors={colors} handleChange={handleChange} />
      </section>

    </aside>
  )
}


export default Filters