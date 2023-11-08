import React, { useState } from 'react'

function ProductForm(props) {
 
    const [productId,setProductId]=useState('');
    const [price,setPrice]=useState('');
    const [productName, setProductName]=useState('');
    const [category,setCategory]=useState('Electronic');

    const productIdHandler=(e)=>{
        setProductId(e.target.value);

    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)

    }
    const productNameHandler=(e)=>{
      setProductName(e.target.value)
    }
    const categoryHandler=(e)=>{
       setCategory(e.target.value)
    }

    const formHandler=(e)=>{
     e.preventDefault();
     const product={
        productId:productId,
        price:price,
        productName:productName,
        category:category

     }
     const a=JSON.stringify(product)
     localStorage.setItem(product.productId,a)
     console.log(product.category);
     props.productHandler()
     console.log(product);
    }

  return (
    <div>
        <form action="" onSubmit={formHandler}>
            <div>
                <label htmlFor="productId">Product Id</label>
                <input type="text" onChange={productIdHandler} />
            </div>
            <div>
                <label htmlFor="price">Selling Price</label>
                <input type="text" onChange={priceHandler} />
            </div>
            <div>
                <label htmlFor="productName">Product Name</label>
                <input type="text" onChange={productNameHandler} />
            </div>
            <div>
                <label htmlFor="category">Choose a category</label>
                <select name="" id="" onChange={categoryHandler}>
                    <option value="Electronic">Electronic</option>
                    <option value="Food">Food</option>
                    <option value="Skincare">Skincare</option>
                </select>
            </div>

            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ProductForm