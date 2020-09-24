import React, { Component } from 'react'
import SignInLink from './SignInlink'
import SignOut from './signoutlink'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    handleOpenSidenav=(e)=>{
      // console.log(e.target)
      document.querySelector('.sidenav').style.width='50%';


    }

    handlecloseSidenav=()=>{
        document.querySelector('.sidenav').style.width='0%';

    }

    render() {
        const username=sessionStorage.getItem('username');
        const jwt=sessionStorage.getItem('jwt');
        if(jwt){
            return (
                <div className='fluid-container bg-light'>
                  <div className='container'>
                   <nav className="navbar navbar-expand-sm  navbar-dark " >
                         <Link to="/" className="navbar-brand color-black"  ><h1>Blogs</h1></Link>
                         <button className="navbar-toggler icon-btn" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" >
                           <span className="navbar-toggler-icon" onClick={ this.handleOpenSidenav}></span>
                         </button>
                         <div className="collapse navbar-collapse" id="collapsibleNavbar1"  >                    
                                <SignInLink />
                                                 
                        </div>
                  
                    </nav> 
                    <div className='sidenav'>
    
                       <div className='sidenav-style'>
                       <button type="button" className="close" aria-label="Close">
                             <span aria-hidden="true" onClick={ this.handlecloseSidenav } >&times;</span>
                        </button>
    
                       <div>
                         <h5  onClick={ this.handlecloseSidenav }>  <Link to="/blogs"><span className='user-style' > { username } </span></Link></h5>
                          
                          <h5 onClick={ this.handlecloseSidenav }> <Link to='/blogs'>Blogs</Link>       </h5>             
                          <h5 onClick={ this.handlecloseSidenav }>  <Link to='/blogs/about'>About</Link></h5>
                          <h5 onClick={ this.handlecloseSidenav }>  <Link to="/blogs/create">New Blog</Link></h5>
                          
                       </div>
    
                       
    
                       </div>
                    </div>
                </div>
                </div>
            )
        }else{
            return (
                <div className='fluid-container bg-light'>
                  <div className='container'>
                   <nav className="navbar navbar-expand-sm  navbar-dark " >
                         <Link to="/" className="navbar-brand color-black"  ><h1>Blogs</h1></Link>
                         <button className="navbar-toggler icon-btn" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" >
                           <span className="navbar-toggler-icon" onClick={ this.handleOpenSidenav}></span>
                         </button>
                         <div className="collapse navbar-collapse" id="collapsibleNavbar1"  >                    
                               
                                <SignOut />                      
                        </div>
                  
                    </nav> 
                    <div className='sidenav'>
    
                       <div className='sidenav-style'>
                       <button type="button" className="close" aria-label="Close">
                             <span aria-hidden="true" onClick={ this.handlecloseSidenav } >&times;</span>
                        </button>
    
                      
                       <div>
                           <h5 onClick={ this.handlecloseSidenav }><Link to='/blogs/signin'>SignIn</Link>  </h5>                  
                           <h5 onClick={ this.handlecloseSidenav }><Link to='/blogs/login'>Login</Link></h5>
                         
                       </div> 
    
                       </div>
                    </div>
                </div>
                </div>
            )
        }
       
    }
}


export default Navbar
