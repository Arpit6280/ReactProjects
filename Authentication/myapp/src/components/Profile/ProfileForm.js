import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import {useHistory} from 'react-router-dom'

const ProfileForm = () => {
  const history=useHistory();
  const authCtx=useContext(AuthContext);
  let newPasswordInputRef=useRef()
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPasswordEntered=newPasswordInputRef.current.value;
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB_o7vD1dv2xerksf4mLLdbKjlKU8zRKQw', {
      method: 'POST',
      body: JSON.stringify({
        idToken:authCtx.token,
        password: newPasswordEntered,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
            let data= await response.json();
           authCtx.login(data.idToken)
            history.replace('/')
    } else {
      response.json().then((data) => {
        //show an error modal
        alert(data.error.message)
      })

    }
   
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'  ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
