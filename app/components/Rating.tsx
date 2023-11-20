'use client'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"



const Rating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} className="inline-block text-[gold] text-sm"><AiFillStar /></span>);
    } else {
      stars.push(<span key={i} className="inline-block text-sm"><AiOutlineStar /></span>);
    }
  }
  return <div className="flex">{stars}</div>;
}

export default Rating