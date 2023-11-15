import React,{useContext} from 'react'
import styles from  './MedicineItem.module.css'
import CartContext from '../../store/cart-context';

function MedicineItem(props) {
    console.log(props.quantity);
  
    const cartCtx=useContext(CartContext);

    const medicineQuantityHandler=(e)=>{
      if(props.quantity<=0)
      return;
      let {updateMedicineQuantity,...item}=props
     props.updateMedicineQuantity(item)

       cartCtx.addItem({
        name:props.name,
        price:props.price,
        description:props.description,
        quantity:1
       })
    }

  return (
    <div className={styles.shoe__items}>
        <li className={styles.shoes}> <p> {props.name} </p>
        <p>{props.description} </p> 
        <p> ${props.price}  </p>
        <div>
          <button onClick={medicineQuantityHandler} className={styles.btn}> Buy Medicine {props.quantity}</button>  
          </div> 
          </li>
    </div>
  )
}

export default MedicineItem