import Image from 'next/image'
import React from 'react'

const RelatedCard = ({data}) => {
    console.log('data',data)
  return (
    <div>
    <Image src={data?.thumbnail} alt={data?.title} class="w-full h-60 object-cover rounded-lg mb-2"   height={100}
      width={100} />
    <h3 class="font-semibold">{data?.title} </h3>
  </div>
  )
}

export default RelatedCard