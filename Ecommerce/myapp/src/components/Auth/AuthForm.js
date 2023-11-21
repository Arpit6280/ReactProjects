import React,{useState, useRef, useContext} from 'react'

import styles from './AuthForm.module.css'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Store/auth-context';

function AuthForm() {
    const navigate=useNavigate()
    
    const [isLogin, setIsLogin] = useState(false);
    const [isloading, setisLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRed = useRef();
  
    let authCtx=useContext(AuthContext)
  
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
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVfOUH31MeVNHoX8Fv2jCksgzMuhEYny8'
      } else {
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVfOUH31MeVNHoX8Fv2jCksgzMuhEYny8'
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
              console.log(data);
              authCtx.login(data.idToken)
            navigate('/products',{replace:true})
      } else {
        response.json().then((data) => {
          //show an error modal
          alert(data.error.message)
        })
  
      }
      setisLoading(false)
    }
  
  
    return (
      <section className={styles.auth}>
        <h1> {isLogin ? 'Login' : 'Sign Up'} </h1>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' ref={emailInputRef} required />
          </div>
          <div className={styles.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              ref={passwordInputRed}
              required
            />
          </div>
          <div className={styles.actions}>
         {!isloading?<button >
            {isLogin ? 'Login' : 'Create Account'} 
            
            </button>: <p className={styles.p}> {isloading ? 'Sending Request...' : ''}</p> }
           
          </div>
          <div className={styles.actions}>
            <button
              type='button'
              className={styles.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    );
}

export default AuthForm