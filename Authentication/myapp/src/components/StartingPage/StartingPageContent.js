import { useContext, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import classes from './StartingPageContent.module.css';
import AuthContext from '../../store/auth-context';

const StartingPageContent = () => {
  const authCtx=useContext(AuthContext)
  const history=useHistory()
  useEffect(()=>{
    setTimeout(()=>{
        console.log(history);
        localStorage.removeItem('token');
        authCtx.logout();
           history.replace('/auth')
    },20000)
},[])
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};

export default StartingPageContent;
