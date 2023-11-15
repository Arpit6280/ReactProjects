import React,{useState} from 'react'
import styles from './MedicinesForm.module.css'

function MedicinesForm(props) {
    const[name,setName]= useState('')
    const[price,setPrice]= useState('')
    const[description,setDescription]= useState('')
    const[quantity,setQuantity]= useState('')


    const namehandler=(e)=>{
       setName(e.target.value)
    }

    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }

    const descriptionHandler=(e)=>{
        setDescription(e.target.value)
    }

    const quantityHandler=(e)=>{
        setQuantity(e.target.value)
    }



    const submitHandler =(e)=>{
      e.preventDefault();
      let medicine={
        name:name,
        price:price,
        description:description,
       quantity:quantity
      }
      console.log(quantity);
      console.log(medicine);
      props.addMedicine(medicine)
      setName('');
      setDescription('')
      setPrice('');
      setQuantity('')
    }
  return (
    <div>
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.formInput}>
            <div className={styles.form__input}>
                <label htmlFor="ShoesName">Medicine Name</label>
                <input type="text" onChange={namehandler} value={name} />
            </div>
            <div className={styles.form__input}>
                <label htmlFor="ShoesPrice">Medicine Price</label>
                <input type="text" onChange={priceHandler } value={price} />
            </div>
            <div className={styles.form__input}>
                <label htmlFor="description">Description</label>
                <input type="text" onChange={descriptionHandler} value={description} />
            </div>
            <div className={styles.form__input}>
                <label htmlFor="large">Quantity Available</label>
                <input type="text" className={styles.size} onChange={quantityHandler} value={quantity} />
            </div>
            <div className={styles.form_button__actions}>
            <button>Add Product</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default MedicinesForm