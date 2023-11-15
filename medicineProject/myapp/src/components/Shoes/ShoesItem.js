import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import styles from './ShoesItem.module.css'

function ShoesItem(props) {
    const cartCtx=useContext(CartContext);

    const largeShoesQuantityHandler=(e)=>{
      if(props.large<=0)
      return;
      let {updateShoes,...item}=props
     props.updateShoes(item,'L')

       cartCtx.addItem({
        name:props.name,
        price:props.price,
        description:props.description,
        large:1,
        medium:0,
        small:0
       },'L')
    }
    const mediumShoesQuantityHandler=(e)=>{
      if(props.medium<=0)
      return;
      let {updateShoes,...item}=props
     props.updateShoes(item,'M')

       cartCtx.addItem({
        name:props.name,
        price:props.price,
        description:props.description,
        large:0,
        medium:1,
        small:0
       },'M')
    }
    const smallShoesQuantityHandler=(e)=>{
      console.log(props.small);
      if(props.small<=0)
      return;
      let {updateShoes,...item}=props
     props.updateShoes(item,'S')

       cartCtx.addItem({
        name:props.name,
        price:props.price,
        description:props.description,
        large:0,
        medium:0,
        small:1
       },'S')
    }

  return (
    <div className={styles.shoe__items}>
        <li className={styles.shoes}> <p> {props.name} </p>
        <p>{props.description} </p> 
        <p> ${props.price}  </p>
        <div>
          <button onClick={largeShoesQuantityHandler} className={styles.btn}> Buy Large {props.large} </button>  
          <button onClick={mediumShoesQuantityHandler} className={styles.btn}> Buy Medium {props.medium} </button> 
          <button onClick={smallShoesQuantityHandler} className={styles.btn}> Buy Small {props.small}</button>  
          </div> 
          </li>
    </div>
  )
}

export default ShoesItem