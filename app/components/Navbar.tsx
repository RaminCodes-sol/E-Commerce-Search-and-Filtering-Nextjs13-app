'use client'
import { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { GoHeart } from "react-icons/go";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";




const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')
  const { handleFilterBySearch, setOpen } = useProductContext()


  useEffect(() => {
    handleFilterBySearch(searchValue)
  }, [searchValue])


  
  return (
    <nav className='w-full border-b border-b-gray-200 flex justify-between items-center px-3 xs:px-5 sm:px-14 py-4'>
      
      {/* ---- Menu Button ---- */}
      <div className='sm:hidden'>
        <button onClick={() => setOpen(true)} className="text-4xl cursor-pointer"><CgMenuLeftAlt /></button>
      </div>

      {/* ---- Input & Buttons */}
      <div className='flex flex-col-reverse items-end sm:flex-row sm:justify-between w-full sm:items-center gap-x-7 gap-y-3 pt-2'>
          {/* -- Search Input -- */}
          <div>
            <input 
              type='text' 
              placeholder="Search..." 
              value={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)} 
              className="border-none outlin-none text-black rounded-sm bg-gray-200" 
            />
          </div>
      
          {/* -- Profile Buttons -- */}
          <div className="flex xs:flex items-center gap-6 text-xl sm:text-2xl">
            <button><GoHeart /></button>
            <button><TiShoppingCart /></button>
            <button><FaUser /></button>
          </div>
        </div>

    </nav>
  )
}

export default Navbar