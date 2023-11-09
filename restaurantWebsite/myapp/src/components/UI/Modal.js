import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom'
import classes from './Modal.module.css'

function Modal(props) {

    const Backdrop= props=>{
        return <div className={classes.backdrop}></div>
    }

    const ModalOverlay=props=>{
        return <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    }

  return (
    <Fragment> 
        {ReactDOM.createPortal(<Backdrop/>,document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>,document.getElementById('overlays'))}

    </Fragment>
  )
}

export default Modal