'use client'
import { useProductContext } from "../context/ProductContext"


type PropsType = {
  products: Product[]
}


const FilterButtons = ({ products }: PropsType) => {
  const { handleFilterByCompanyName } = useProductContext()

  // Getting all products company names
  const companies = ["all products", ...new Set([...products.map(product => product.company.toLowerCase())])]

  return (
    <div className="px-6 xs:px-7 py-3 flex flex-wrap gap-2 gap-y-3 xs:gap-4">
      {
        companies.map(company => (
          <button onClick={() => handleFilterByCompanyName(company)} key={company} className="bg-gray-200 px-3 py-[.45rem] rounded-md transition-colors text-sm hover:bg-gray-300 capitalize">
            {company}
          </button>
        ))
      }
    </div>
  )
}

export default FilterButtons