import React from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/productcard'
import { products } from '../data/products'

const Home = () => {
  return (
    <div>
        <Hero />
        <div className='px-100'>
            <div className='font-bold text-xl pt-6 pb-4'>Featured Clubs Jerseys</div>
            <div className='grid grid-cols-3 gap-y-2 mb-2 gap-2'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    </div>
  )
}

export default Home