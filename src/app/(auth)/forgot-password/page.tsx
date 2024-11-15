import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
    title: { absolute : "Forget Password" } 
}

const forgerPassword = () => {
  return (
    <>
    <h1>Forget Password Page</h1>
    </>
  )
}

export default forgerPassword;