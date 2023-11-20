import Filters from "./components/Filters";
import Products from "./components/Products";



// Geting Products
const getProducts = async () => {
  const response = await fetch("http://localhost:4000/data")

  if (!response.ok) throw new Error("failded to fetch data")
  
  return response.json()
}


export default async function Home() {
  const data: Promise<Product[]> = getProducts()
  const products = await data


  return (
    <main className="w-full grid grid-cols-1 sm:grid-cols-Auto1fr">
      <Filters />
      <Products products={products} />
    </main>
  )
}
