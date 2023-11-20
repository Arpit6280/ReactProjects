import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isloading, setisLoading]=useState(false);
  const emailInputRef= useRef();
  const passwordInputRed=useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler= async(e)=>{
    e.preventDefault();
    setisLoading(true)
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRed.current.value
    console.log('kk');
    if(isLogin){

    }else{
      const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyB_o7vD1dv2xerksf4mLLdbKjlKU8zRKQw',{
        method:'POST',
        body: JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken: true
        }),
        headers:{
          'Content-TYpe':'application/json'
        }
      });
      if(response.ok){

      }else{
        const data= await response.json();
        //show an error modal
        console.log(data);
      }
      
    }
   
    setisLoading(false)


  }

  // const authHandler=async()=>{
  //   console.log('hi');
  //   const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]');
  //   const data= await response.json();
  //   console.log(data);
  // }
  console.log('ll');

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRed}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>
            {isloading?'Loading...':'Create Account'}
          </button>
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;


//https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
