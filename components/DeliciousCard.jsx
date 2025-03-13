import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import categories from '../data/categories.json'

const DeliciousCard = ({data,fullStars,hasHalfStar}) => {
    const findCategory= categories.filter((category)=> category?.id === data?.category_id)
    console.log('find',findCategory)
  return (
    <Link href={`/${findCategory[0]?.name}/${data?.title}`}>
    <div >
    <Image
      src={data?.thumbnail}
      alt={data?.title}
      className="w-full h-[300px] object-cover rounded-lg mb-4"
      height={300}
      width={400}
    />
    <h3 className="text-xl font-semibold mb-2">{data?.title}</h3>
    <div className="flex items-center text-yellow-500 mb-2">
      {/* পূর্ণ স্টার */}
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {/* হাফ স্টার */}
      {hasHalfStar && (
        <svg key="half" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <defs>
          <linearGradient id="halfStarGradient">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="white" />
          </linearGradient>
        </defs>
        <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      )}
    </div>
    <p className="text-gray-600">{data?.cooking_time}</p>
  </div>
  </Link>
  )
}

export default DeliciousCard