import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
   <>
   <h1>Home Page</h1>
   <Link href="/products">Products</Link>
   </>
  )
}

export default HomePage;