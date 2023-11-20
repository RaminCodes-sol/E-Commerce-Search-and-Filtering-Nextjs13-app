'use client'
import { useRouter } from 'next/navigation'





const HomePageButton = () => {
    const router = useRouter()
  return (
    <div className="my-5 mb-10">
        <button onClick={() => router.push('/')} className='p-2 text-sm bg-purple-500 text-white rounded-md transition-colors hover:bg-purple-600'>Back To Products</button>
      </div>
  )
}

export default HomePageButton