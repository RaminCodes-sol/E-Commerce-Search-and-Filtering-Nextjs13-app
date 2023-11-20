'use client'


type PropsType = {
  prices: string[],
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}



const PriceFilters = ({ prices, handleChange }: PropsType) => {
  return (
    <section>

      {/* ----- Title ----- */}
      <h3 className="text-xl mb-2">Prices</h3>

      {/* ----- Filters ----- */}
      <div className='space-y-2 sm:space-y-1 ml-2'>
        { 
          prices.map(price => (
            <div key={price} className="w-[110px] sm:w-auto">
              <label className='flex items-center gap-2 cursor-pointer'> 
                <input type="radio" name="category" id="price" value={price} onChange={handleChange} className='w-[17px] h-[17px]' />
                <span className='text-sm'>{price}</span>
              </label>
            </div>
          )) 
        }
      </div>
      
    </section>
  )
}


export default PriceFilters

