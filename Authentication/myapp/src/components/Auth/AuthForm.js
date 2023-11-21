import { useState, useRef, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const history=useHistory()
  const [isLogin, setIsLogin] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRed = useRef();

  let authCtx=useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    setisLoading(true)
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRed.current.value
    let url
    if (isLogin) {
       url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_o7vD1dv2xerksf4mLLdbKjlKU8zRKQw'
    } else {
       url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_o7vD1dv2xerksf4mLLdbKjlKU8zRKQw'
 }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
            let data= await response.json();
           authCtx.login(data.idToken)
           localStorage.setItem("11", data.idToken);
            history.replace('/')
    } else {
      response.json().then((data) => {
        //show an error modal
        alert(data.error.message)
      })

    }
    setisLoading(false)
  }


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
       {!isloading?<button >
         {isLogin ? 'Login' : 'Create Account'} 
          
          </button>: <p className={classes.p}> {isloading ? 'Sending Request...' : ''}</p> }
         
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
