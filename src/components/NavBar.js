import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'
function NavBar(props) {

    const [click, setClick] = useState(true)

    const closeMobileMenu = () => {
        setClick(false)
    }

    const [button,setButton]=useState(true)

    useEffect=(()=>{
        showButton()
    },[])

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        } else setButton(true)
    }

    window.addEventListener('resize',showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        HAtW <i className="fa-solid fa-hand-back-fist"></i>
                    </Link>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    );
}

export default NavBar;