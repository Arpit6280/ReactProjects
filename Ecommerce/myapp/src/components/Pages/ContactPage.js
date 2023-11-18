import React, { useRef, useState } from 'react'
import styles from  './ContactPage.module.css'
import Button from 'react-bootstrap/Button';

function ContactPage() {

    let name= useRef()
    let email=useRef()
    let phone_No=useRef();
    const submitHandler=(e)=>{
     e.preventDefault()
     console.log('g');
     let contact={
        name:name.current.value,
        email:email.current.value,
        phone_No:phone_No.current.value
     }
     name.current.value=''
     email.current.value=''
     phone_No.current.value=''
     fetchContactHandler(contact)
    }
    const fetchContactHandler=async (contact)=>{
      let response= await fetch('https://react-http-62209-default-rtdb.firebaseio.com/contacts.json',{
        method:'POST',
        body:JSON.stringify(contact),
      headers:{
        'Content-Type':'application/json'
      }
      })
      let data =await response.json();

    }
  return (
    <form className={styles.section} onSubmit={submitHandler}>
        <div className={styles.control_input}>
            <label htmlFor="name">Name</label>
            <input type="text" ref={name} />
        </div>
        <div className={styles.control_input}>
            <label htmlFor="email">Email</label>
            <input type="text" ref={email} />
        </div>
        <div className={styles.control_input}>
            <label htmlFor="phone">Phone No.</label>
            <input type="text" ref={phone_No} />
        </div>
        <button className={styles.btn}>Submit</button>
    </form>
  )
}

export default ContactPage