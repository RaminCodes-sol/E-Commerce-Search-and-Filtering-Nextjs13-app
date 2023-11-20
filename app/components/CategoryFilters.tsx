'use client'


type PropsType = {
  categories: string[],
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


const CategoryFilters = ({ categories, handleChange,}: PropsType) => {
  return (
    <section>

      {/* ----- Title ----- */}
      <h3 className="text-xl mb-2">Category</h3>

      {/* ----- Filters ----- */}
      <div className='space-y-2 sm:space-y-1 ml-2'>
        { 
          categories.map(category => (
            <div key={category} className="w-[110px] sm:w-auto">
              <label className='flex items-center gap-2 cursor-pointer'> 
                <input type="radio" name="category" id="category" value={category} onChange={handleChange} className='w-[17px] h-[17px]' />
                <span className='text-sm'>{category}</span>
              </label>
            </div>
          )) 
        }
      </div>
      
    </section>
  )
}


export default CategoryFilters