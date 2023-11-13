import React, { useState } from 'react'

function ShoesForm(props) {
    const[name,setName]= useState('')
    const[price,setPrice]= useState('')
    const[description,setDescription]= useState('')
    const[large,setLarge]= useState('')
    const[medium,setMedium]= useState('')
    const[small,setSmall]= useState('')


    const namehandler=(e)=>{
       setName(e.target.value)
    }

    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }

    const descriptionHandler=(e)=>{
        setDescription(e.target.value)
    }

    const largeHandler=(e)=>{
        setLarge(e.target.value)
    }

    const mediumHandler=(e)=>{
        setMedium(e.target.value)
    }

    const smallHandler=(e)=>{
        setSmall(e.target.value)
    }


    const submitHandler =(e)=>{
      e.preventDefault();
      let shoes={
        name:name,
        price:price,
        description:description,
        large:large,
        small:small,
        medium:medium
      }
      props.addShoes(shoes)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="ShoesName">Shoes Name</label>
                <input type="text" onChange={namehandler} />
            </div>
            <div>
                <label htmlFor="ShoesPrice">Shoes Price</label>
                <input type="text" onChange={priceHandler } />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" onChange={descriptionHandler} />
            </div>
            <div>
                <label htmlFor="large">L</label>
                <input type="text" onChange={largeHandler} />
                <label htmlFor="medium">M</label>
                <input type="text" onChange={mediumHandler} />
                <label htmlFor="small">S</label>
                <input type="text" onChange={smallHandler} />
            </div>
            <button>Add Product</button>
        </form>
    </div>
  )
}

export default ShoesForm