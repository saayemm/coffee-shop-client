import React from 'react'
import { useLoaderData } from 'react-router'

const UpdateCoffee = () => {
  const coffee = useLoaderData()
  const {_id, name, chef, supplier, taste, category, details, photo } = coffee

 
  return (
    <div>
        <h2 className='text-2xl font-semibold'>Update Coffee</h2>
        <p>{name}</p>
    </div>
  )
}

export default UpdateCoffee