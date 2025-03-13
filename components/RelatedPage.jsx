import React from 'react'
import recipes from '../data/recipes.json'
import RelatedCard from './RelatedCard'

const RelatedPage = ({category_id}) => {
  let relatedRecipes= recipes.filter((data)=> data?.category_id === category_id)
  console.log('related',relatedRecipes)
  return (
    
    <section class="my-12">
      <h2 class="text-3xl font-bold mb-8">You might also like</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {relatedRecipes.map((data, index) => {
         return (
          <RelatedCard key={index} data={data}  />
        );
      })}
      </div>
    </section>
  )
}

export default RelatedPage