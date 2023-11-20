import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"


type PropsType = {
  params: {
    productId: string
  }
}

/*--------Generate Metadata--------*/
export const generateMetadata = async ({ params: { productId }}: PropsType): Promise<Metadata> => {
  const response = await fetch(`http://localhost:4000/data/${productId}`)
  const product:Product = await response.json()

  if (!product.id) return {
    title: "Page Not Found!"
  }

  return {
    title: product.title,
    description: `this is the description for ${product.title}`
  }
}


// Get Product
const getProduct = async (productId: string) => {
  const response = await fetch(`http://localhost:4000/data/${productId}`)

  if (!response.ok) throw new Error("failed to fetch data")

  return response.json()
}



const page = async ({ params: { productId } }: PropsType) => {
  const data:Promise<Product> = getProduct(productId)
  const product = await data

  return (
    <section className="w-full max-w-[1100px] px-4 py-4 mx-auto">

      {/* ----- Back to HomePage Button ----- */}
      <div className="my-5 mb-10">
        <Link href='/' className='p-2 text-sm bg-purple-500 text-white rounded-md transition-colors hover:bg-purple-600'>Back To Products</Link>
      </div>

      {/* ----- Product Details ----- */}
      <div className='grid gap-2 grid-cols-1 justify-items-center py-2 sm:grid-cols-2 md:mt-[5rem]'>

        {/* --- Product Image --- */}
        <div className='flex items-center'>
          <figure>
            <Image src={product.img} width={400} height={500} alt='img' />
          </figure>
        </div>


        {/* --- Product --- */}
        <div className="mt-3 px-3">
          
          {/* -- Title -- */}
          <div className="w-full flex justify-between my-5">
            <h3 className="text-lg">{product.title}</h3>
            <span className="text-xl font-bold inline-block">${product.newPrice}</span>
          </div>
          
          {/* -- Details -- */}
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-1">
              <small>Color:</small>
              <span style={{
                'backgroundColor': `${product.color.toString().toLowerCase()}`
              }} className={`inline-block mr-2 w-[15px] h-[15px] ${product.color.toString().toLowerCase() === "white" && 'border border-gray-400'} rounded-full`}></span>
            </div>
            <div className="flex justify-between items-center gap-1">
              <small>Brand:</small>
              <span className="inline-block mr-1 text-sm text-orange-500">{product.company}</span>
            </div>
          </div>
            
          {/* -- Descrition -- */}
          <div className="w-full max-w-[400px] mt-4 indent-2"> 
            <p className='text-sm leading-6'>{`Introducing our revolutionary product: 🌟 ${product.title} 🌟 It's a game-changer in the world of technology, combining functionality and style in one compact device. the ${product.title} is your ultimate companion for productivity and entertainment`}</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default page


/*--------Generate Static Params--------*/
export const generateStaticParams = async () => {
  const response = await fetch('http://localhost:4000/data')
  const products: Product[] = await response.json()
  
  return products.map(product => ({
    productId: product.id.toString()
  }))
}
