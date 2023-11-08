import React from 'react'

function SkinCareItems(props) {
    const delteHandler =(id)=>{
        localStorage.removeItem(id);
        props.productHandler();
        }


      return (
        <div>
            <h2>Skin Care Items</h2>
        { props.skinCareItems.map((skinCare)=>(
            <div className='items'>
            <li>{skinCare.price} - {skinCare.category}  {skinCare.productName} </li>
            <button className='btn' onClick={()=>delteHandler(skinCare.productId)}>Delete Product</button>
            </div>
        ))}
        </div>
      )
}
export default SkinCareItems