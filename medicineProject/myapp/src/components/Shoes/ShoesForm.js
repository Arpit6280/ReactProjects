import React, { useState } from 'react'
import styles from  './ShoesForm.module.css'

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
      setName('');
      setDescription('')
      setPrice('');
      setLarge('')
      setSmall('')
      setMedium('')
    }
  return (
    <div>
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.formInput}>
            <div className={styles.form__input}>
                <label htmlFor="ShoesName">Shoes Name</label>
                <input type="text" onChange={namehandler} value={name} />
            </div>
            <div className={styles.form__input}>
                <label htmlFor="ShoesPrice">Shoes Price</label>
                <input type="text" onChange={priceHandler } value={price} />
            </div>
            <div className={styles.form__input}>
                <label htmlFor="description">Description</label>
                <input type="text" onChange={descriptionHandler} value={description} />
            </div>
            <div className={styles.form__input_size}>
                <label htmlFor="large">L</label>
                <input type="text" className={styles.size} onChange={largeHandler} value={large} />
                <label htmlFor="medium">M</label>
                <input type="text" className={styles.size} onChange={mediumHandler} value={medium} />
                <label htmlFor="small">S</label>
                <input type="text" className={styles.size} onChange={smallHandler}  value={small}/>
            </div>
            <div className={styles.form_button__actions}>
            <button>Add Product</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default ShoesForm