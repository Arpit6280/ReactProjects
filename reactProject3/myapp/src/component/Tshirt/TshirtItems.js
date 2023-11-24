import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import styles from './TshirtItems.module.css'

function TshirtItems(props) {
    const cartCtx=useContext(CartContext);

    const largeTshirtQuantityHandler=(e)=>{
      if(props.large<=0)
      return;
      let {updateTshirt,...item}=props
     props.updateTshirt(item,'L')

       cartCtx.addItem({
        name:props.name,
        price:props.price,
        description:props.description,
        large:1,
        medium:0,
        small:0
       },'L')
    }
    const mediumTshirtQuantityHandler=(e)=>{
      if(props.medium<=0)
      return;
      let {updateTshirt,...item}=props
     props.updateTshirt(item,'M')

       cartCtx.addItem({
        name:props.name,
        price:props.price,
        description:props.description,
        large:0,
        medium:1,
        small:0
       },'M')
    }
    const smallTshirtQuantityHandler=(e)=>{
      console.log(props.small);
      if(props.small<=0)
      return;
      let {updateTshirt,...item}=props
     props.updateTshirt(item,'S')

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
    <div className={styles.tshirt__items}>
        <li className={styles.tshirt}> <p> {props.name} </p>
        <p>{props.description} </p> 
        <p> ${props.price}  </p>
        <div>
          <button onClick={largeTshirtQuantityHandler} className={styles.btn}> Buy Large {props.large} </button>  
          <button onClick={mediumTshirtQuantityHandler} className={styles.btn}> Buy Medium {props.medium} </button> 
          <button onClick={smallTshirtQuantityHandler} className={styles.btn}> Buy Small {props.small}</button>  
          </div> 
          </li>
    </div>
  )
}

export default TshirtItems