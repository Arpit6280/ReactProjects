import React,{useState} from 'react'
import MedicinesForm from './MedicinesForm'
import MedicineItem from './MedicineItem'

function Medicines() {
    const [medicines, setMedicines] = useState([])
    const addMedicineHandler = (medicine) => {
       setMedicines((prevState) => {
          return [...prevState, medicine]
       })
       console.log(medicines[0]);
    }
    const updateMedicineQuantityHandler = (medicine) => {
       const existingItemIndex=medicines.findIndex((item)=> item.name===medicine.name)
       const existingCartItem=medicines[existingItemIndex];
       let updatedItem;
       let updatedItems;
          updatedItem={
           ...existingCartItem,
          quantity: parseInt(existingCartItem.quantity) -1
          }
       updatedItems=[...medicines];
       updatedItems[existingItemIndex]=updatedItem
       setMedicines(updatedItems);
    }
    return (
       <React.Fragment>
        
          <MedicinesForm addMedicine={addMedicineHandler} />
          {medicines.map((item) => (
            
             <MedicineItem
                name={item.name}
                price={item.price} 
                description={item.description} 
                quantity={item.quantity}
                updateMedicineQuantity={updateMedicineQuantityHandler} />
          ))}
       </React.Fragment>
    )
}

export default Medicines