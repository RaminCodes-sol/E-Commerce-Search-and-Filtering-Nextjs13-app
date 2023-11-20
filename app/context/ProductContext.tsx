'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";


type ContextType = {
    products: Product[],
    setProducts: Dispatch<SetStateAction<Product[]>>,
    filteredProducts: Product[],
    setFilteredProducts: Dispatch<SetStateAction<Product[]>>,
    handleFilterBySearch: (searchValue: string) => void,
    handleFilterByCompanyName: (company: string) => void,
    handleFilterByCategory: (category: string) => void,
    handleFilterByPrice: (price: string) => void,
    handleFilterByColor: (color: string) => void,
    isOpen: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}



// create ProductContext
const ProductContext = createContext<ContextType>({} as ContextType)

// use ProductContext
export const useProductContext = () => useContext(ProductContext)


// ProductContext Provider
export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [isOpen, setOpen] = useState(false)



    /* ------ Handle Filter By Search ------*/
    const handleFilterBySearch = (searchValue: string) => {
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredProducts(filteredProducts)
    }


    /* ------ Handle Filter By Company Name ------*/
    const handleFilterByCompanyName = (company: string) => {
        if (company === "All Products") {
            setFilteredProducts(products)
        } else {
            const filteredProducts = products.filter(product => product.company.toLowerCase() === company.toLowerCase())
            setFilteredProducts(filteredProducts)
        }
    }


    /* ------ Handle Filter By Category ------*/
    const handleFilterByCategory = (category: string) => {
        if (category === "All") {
            setFilteredProducts(products)
        } else {
            const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase())
            setFilteredProducts(filteredProducts)
        }
    }


    /* ------ Handle Filter By Price ------*/
    const handleFilterByPrice = (price: string) => {
        if (price === "All") {
            setFilteredProducts(products)
        } else {
            const filteredProducts = products.filter(product => {
                if (price === "$0-50") {
                    return product.newPrice > 0 && product.newPrice <= 50 
                } else if (price === '$50-100') {
                    return product.newPrice >= 50 && product.newPrice <= 100
                } else if (price === "$100-150") {
                    return product.newPrice >= 100 && product.newPrice <= 150
                } else if (price === "Over $150") {
                    return product.newPrice > 150
                }
            })
            setFilteredProducts(filteredProducts)
        }
    }

    
    /* ------ Handle Filter By Color ------*/
    const handleFilterByColor = (color: string) => {
        if (color === "All") {
            setFilteredProducts(products)
        } else {
            const filteredProducts = products.filter(product => product.color.toLowerCase() === color.toLowerCase())
            setFilteredProducts(filteredProducts)
        }
    }


    const value = { 
        products, 
        setProducts, 
        filteredProducts, 
        setFilteredProducts, 
        handleFilterBySearch,
        handleFilterByCompanyName,
        handleFilterByCategory,
        handleFilterByPrice,
        handleFilterByColor,
        isOpen,
        setOpen
    }


    return (
        <ProductContext.Provider value={value}>
            { children }
        </ProductContext.Provider>
    )
}