import Image from 'next/image'
import React from 'react'
import recepie from '../data/recipes.json'
import DeliciousCard from './DeliciousCard';

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
              <DeliciousCard key={index} data={data} fullStars={fullStars} hasHalfStar={hasHalfStar} />
            );
          })}
        </div>
      </section>
    );
  };
  
  export default Delicious;