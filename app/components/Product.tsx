import Image from "next/image"
import Link from "next/link"
import Rating from "./Rating"



const Product = ({ product }: { product: Product }) => {
  
  return (
    <Link href={`/product/${product.id}`} className="h-full border border-gray-300 flex flex-col px-4 py-3 rounded-md transition-shadow duration-250 hover:shadow-xl cursor-pointer">

      {/* ----- Product Image ----- */}
      <figure className="w-full h-full">
        <Image src={product.img} width={300} height={400} priority alt='img' className='w-full max-h-[150px] h-full object-contain' />
      </figure>

      {/* ----- Product Details ----- */}
      <div className="mt-6">
        <h3 className='text-sm mb-3 font-medium'>{product.title}</h3>

        <div className="flex justify-between items-center mb-3">
          <span className=""><Rating rating={product.rating} /></span>
          <small className="text-orange-500 inline-block">{product.company}</small>
        </div>

        <div className="flex justify-between items-center">
          <del className="text-sm">{product.prevPrice}</del>
          <span className="text-lg font-semibold">${product.newPrice}</span>
        </div>
      </div>

    </Link>
  )
}

export default Product