import React from 'react'
import recepiejson from '../data/recipes.json'
import categoriesjson from '../data/categories.json'

const PopularCategory = () => {
    const recipes= recepiejson
    const categories = categoriesjson

// 1. প্রতিটি ক্যাটেগরির রেসিপির সংখ্যা গোনা
const categoryCount = {};
recipes.forEach(recipe => {
  const catId = recipe.category_id;
  categoryCount[catId] = (categoryCount[catId] || 0) + 1;
});

// 2. রেসিপির সংখ্যার উপর ভিত্তি করে ক্যাটেগরি সাজানো
const sortedCategories = Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1]) // বড় থেকে ছোট
  .slice(0, 6) // শীর্ষ ৬টি ক্যাটেগরি নেওয়া
  .map(([id]) => id);

// 3. HTML-এ জনপ্রিয় ক্যাটেগরি দেখানো
const popularCategories = categories.filter(cat => sortedCategories.includes(cat.id));
// console.log('popu',popularCategories)

  return (
    <section class="mb-16">
    <div class="flex justify-between items-top">
      <h2 class="text-3xl font-bold mb-8">Popular Categories</h2>
      <a href="./category.html" class="text-orange-500">View All</a>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
     {popularCategories.map((data,index)=>(
       <div class="cursor-pointer text-center group" key={index}>
       <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
         <img
           src={data?.image}
           alt={data?.name}
           class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
       </div>
       <p class="transition-transform duration-300 group-hover:scale-105">{data?.name}</p>
     </div>
     ))}
      
    </div>
  </section>
  )
}

export default PopularCategory