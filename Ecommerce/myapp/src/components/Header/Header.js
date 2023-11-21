import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../Store/cart-context';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../Store/auth-context';
import { useNavigate } from 'react-router-dom';


function Header(props) {
    const cartCtx = useContext(CartContext)
    const authCtx=useContext(AuthContext)
    const navigate=useNavigate()
    const logoutHandler=()=>{
        authCtx.logout();
        navigate('/auth',{replace:true})
    }
    return (
        <div >
            <Container fluid className={styles.contain}>
                <Row className='bg-dark p-3 '>
                    <Col sm={10}>
                        <Row className={styles.navRow}>
                            <Col> <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : undefined)}>HOME </NavLink> </Col>
                            <Col> <NavLink to='/products' className={({ isActive }) => (isActive ? styles.active : undefined)}> STORE </NavLink></Col>
                            <Col><NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : undefined)}> ABOUT </NavLink></Col>
                            <Col><NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : undefined)}> CONTACT US </NavLink></Col>
                            {!authCtx.isLoggedIn &&  <Col><NavLink to='/auth' className={({ isActive }) => (isActive ? styles.active : undefined)}> LogIn/SignUp </NavLink></Col>}   
                            {authCtx.isLoggedIn && <Col><Link onClick={logoutHandler}> Logout</Link></Col>}  
                        </Row>
                    </Col>
                    <Col sm={2}>
                        <span className={styles.span}>   <FontAwesomeIcon icon={faCartShopping}
                            className={styles.icon} onClick={props.cartOpenHandler} /> {cartCtx.totalItems} </span>
                    </Col>
                </Row>
                <div className={styles.header_top}>
                    <p className='text-center display-1 fw-bold text-light'>THE GENERIC</p>
                </div>
            </Container>
        </div>
    )
}

export default Header