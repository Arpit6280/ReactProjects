import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'

const Backdrop=(props)=>{
   return <div className={classes.backdrop} onClick={props.closeCart}></div>
}

const ModalOverlay=(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

function Modal(props) {
  return (
    <Fragment>
         {ReactDom.createPortal(<Backdrop closeCart={props.onCartClose} />, document.getElementById('overlays'))}
            {ReactDom.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, document.getElementById('overlays'))}
    </Fragment>
  )
}

export default Modal