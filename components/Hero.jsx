import React from 'react'
import recepie from '../data/recipes.json'
import Image from 'next/image'

const Hero = () => {
    const data= recepie
    const result= data[4]
    // console.log("result",result)
  return (
    <section class="mb-16 bg-orange-50">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <Image src={result?.thumbnail} alt="Mighty Super Cheesecake" class="w-full h-[450px] object-cover rounded-lg" height={100} width={100} />
      </div>
      <div>
        <h1 class="text-4xl font-bold mb-4">Decadent Tiramisu Delight</h1>
        <p class="text-gray-600 mb-4">
          Indulge in the ultimate Italian dessert experience with our velvety smooth tiramisu. Layers of
          coffee-soaked ladyfingers and creamy mascarpone filling create a heavenly treat that's sure to impress.
        </p>
        <a href="./blog-details.html"
          class="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">View Recipe</a>
      </div>
    </div>
  </section>
  )
}

export default Hero