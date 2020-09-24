import React, { Component } from 'react'
import { api } from '../../backend'

class Login extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=async(e)=>{
        e.preventDefault();
       // console.log(this.state);
       const { email,password }=this.state;
       document.querySelector('.email.error').textContent=    ''
       document.querySelector('.password.error').textContent= '';
       try{
        const res=await fetch(`${api}/login` , {
           method:'POST',
           body:  JSON.stringify({ email,password }),
           headers:{ 'Content-type':'application/json'}
        });
        const data=await res.json();
        console.log(data);
        if(data.erros){
    
          document.querySelector('.email.error').textContent=data.erros.email;
          document.querySelector('.password.error').textContent=data.erros.password;

         // console.log(data);
        }
        if(data.user){
            sessionStorage.setItem('jwt',data.jwt);
            sessionStorage.setItem('username',data.username);

              this.props.history.push('/');
              window.location.reload();
        }
      }catch(err){
          console.log(err)
      }
    
    
    }

    render() {
        return (
            <div className='container'>
                <div className='login'>
                <h5>Login here !!!</h5>
                <form onSubmit={ this.handleSubmit }>
                   
                   <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input type="email" className="form-control" placeholder="Enter email" onChange={ this.handleChange } id="email" />
                       <div className='email error'></div>
                   </div>

                   <div className="form-group">
                       <label htmlFor="password">Password</label>
                       <input type="password" className="form-control" placeholder="Enter password" onChange={ this.handleChange } id="password" />
                       <div className='password error'></div>
                   </div>

                   <button type="submit" className="btn btn-primary">Login</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Login
