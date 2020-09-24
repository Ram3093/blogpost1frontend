import React ,{ Component } from 'react'
import { Link } from 'react-router-dom'

class SignInLink extends Component {
      state={

      }
        handleLogout=(e)=>{
              sessionStorage.removeItem('jwt');  
              sessionStorage.removeItem('username'); 
              window.location.reload(); 
        }

        render() { 
                const username=sessionStorage.getItem('username').toUpperCase();
                return ( 
                        <ul className="navbar-nav justify-content-center">
                       
                        <li className='nav-item' ><Link className='nav-link color-black' to="/blogs">Blogs</Link></li>
                        <li className='nav-item' ><Link className='nav-link color-black' to="/blogs/create">New Blog</Link></li>
                       
                        <li className='nav-item user-style' ><Link className='nav-link color-black' to="/blogs">{username}</Link></li>
                        <li className='nav-item' ><Link className='nav-link color-black' to="/blogs/about">About</Link></li>
                        <li className='nav-item' onClick={ this.handleLogout } ><Link className='nav-link color-black' to="/blogs/logout">Logout</Link></li>
                  </ul>
             
                 );
        }
}
 

export default SignInLink
