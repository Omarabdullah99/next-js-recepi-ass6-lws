import Image from 'next/image'
import React from 'react'
import recepie from '../data/recipes.json'

const Delicious = () => {
    const datas = recepie;
    const topRatedBlogs = datas.sort((a, b) => b.rating.rating_count - a.rating.rating_count).slice(0, 3);
    // console.log("topRatedBlogs",topRatedBlogs)
  
    return (
      <section className="mb-16" id="super_delicious">
        <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {topRatedBlogs.map((data, index) => {
            const fullStars = Math.floor(data.rating.average_rating);
            const hasHalfStar = data.rating.average_rating % 1 !== 0;
  
            return (
              <div key={index}>
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
            );
          })}
        </div>
      </section>
    );
  };
  
  export default Delicious;