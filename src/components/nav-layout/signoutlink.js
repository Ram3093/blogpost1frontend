import React  from 'react'
import { Link } from 'react-router-dom'

const SignOut =()=>{
        return (
            
                <ul className="navbar-nav"  >
                <li className='nav-item'>   <Link className='nav-link  color-black' to='/blogs/signin'>SignUp</Link>  </li>    
                <li className='nav-item' >   <Link className='nav-link color-black'  to='/blogs/login'>Login</Link>  </li>    
                <li className='nav-item' >   <Link className='nav-link color-black'  to='/blogs/about'>About</Link>  </li>    
                
                </ul>
           
        )
    
}

export default SignOut
