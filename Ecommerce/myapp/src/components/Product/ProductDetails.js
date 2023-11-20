import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const params=useParams()
  return (
    <div>ProductDetails
        <h1>{params.productId}</h1>
    </div>
  )
}

export default ProductDetails