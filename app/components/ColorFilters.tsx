'use client'


type PropsType = {
  colors: string[],
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const ColorFilters = ({ colors, handleChange }: PropsType) => {
  return (
    <section>

      {/* ----- Title ----- */}
      <h3 className="text-xl mb-2">Colors</h3>

      {/* ----- Filters ----- */}
      <div className='space-y-2 sm:space-y-1 ml-2'>
        {
          colors.map(color => (
            <div key={color} className="w-[110px] sm:w-auto">
              <label className='flex items-center gap-2 cursor-pointer'> 
                <input type="radio" name="category" id='color' value={color} onChange={handleChange} className='w-[17px] h-[17px]' />
                <span className='text-sm'>{color}</span>
              </label>
            </div>
          )) 
        }
      </div>
      
    </section>
  )
}


export default ColorFilters