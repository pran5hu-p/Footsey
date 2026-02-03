import React from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home = () => {
  return (
    <div>
        <Hero />
        <div className='container mx-auto px-4 md:px-10 py-8'>
            
            <div className='font-bold text-2xl md:text-3xl pt-6 pb-6 text-slate-900'>
                Featured Club Jerseys
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    </div>
  )
}

export default Home