import Link from 'next/link';
import React from 'react'

const ProductPage = () => {
  const productId = 10
  return (
    <>
    <h1>Products</h1>
    <h2><Link href="products/1" replace>Product 1</Link></h2>
    <h2><Link href="products/2">Product 2</Link></h2>
    <h2><Link href="products/3">Product 3</Link></h2>
    <h2><Link href={`products/${productId}`}>Product {productId}</Link></h2>

    </>
  )
}

export default ProductPage; 