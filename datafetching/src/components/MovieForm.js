import React, { useState } from 'react'
import classes from  './MovieForm.module.css'

function MovieForm() {
    const [title,setTitle]=useState('')
    const [openingText, setOpeningText]=useState('')
    const [date,setDate]=useState('');

    const titleHandler=(e)=>{
       setTitle(e.target.value)
    }
    const openTextHandler=(e)=>{
        setOpeningText(e.target.value)
     }
     const onDateHandler=(e)=>{
        setDate(e.target.value)
     }

     const submitHandler=(e)=>{
        e.preventDefault();
        let NewMovieObj={
            title:title,
            openingText: openingText,
          releaseDate: date
        }
        console.log(NewMovieObj);
     }
  return (
    <form onSubmit={submitHandler}>

      <div className={classes.control_input}>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={titleHandler} value={title} />
      </div>
      <div className={classes.control_input}>
        <label htmlFor="openingText">Opening text</label>
        <textarea name="" id="" cols="30" rows="10" onChange={openTextHandler} value={openingText}></textarea>
      </div>
      <div className={classes.control_input}>
        <label htmlFor="ReleaseDate">Release Date</label>
        <input type="text" onChange={onDateHandler} value={date} />
      </div>
     <button>submit</button>
    </form>


  )
}

export default MovieForm