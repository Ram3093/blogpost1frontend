import React, { Component } from 'react'
import { api } from '../../backend'


class Register extends Component {
    state={
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(this.state);
        const { email,password,firstname,lastname }=this.state;
        document.querySelector('.firstname.error').textContent='';
        document.querySelector('.lastname.error').textContent= '';
        document.querySelector('.email.error').textContent=    ''
        document.querySelector('.password.error').textContent= '';

        try{
            const res=await fetch(`${api}/signup` , {
               method:'POST',
               body:  JSON.stringify({ email,password,firstname,lastname }),
               headers:{ 'Content-type':'application/json'}
            });
            const data=await res.json();
            console.log(data);
            if(data.erros){
              document.querySelector('.firstname.error').textContent=data.erros.firstname;
              document.querySelector('.lastname.error').textContent=data.erros.lastname;
              document.querySelector('.email.error').textContent=data.erros.email;
              document.querySelector('.password.error').textContent=data.erros.password;

              console.log(data);
            }
            if(data.user){
                  sessionStorage.setItem('jwt',data.jwt);
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
               <div className='register'>
               <h5>Register here !!!</h5>
                <form onSubmit={ this.handleSubmit }>
                   <div className="form-group">
                     <label htmlFor="firstname">First name</label>
                     <input type="text" className="form-control" placeholder="Enter first name" onChange={ this.handleChange } id="firstname" />
                     <div className='firstname error'></div>
                   </div>
                   <div className="form-group">
                     <label htmlFor="lastname">Last name</label>
                     <input type="text" className="form-control" placeholder="Enter last name" onChange={ this.handleChange } id="lastname" />
                     <div className='lastname error'></div>
                   </div>
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
                   <button type="submit" className="btn btn-primary">Register</button>
                </form>
</div>

            </div>
        )
    }
}

export default Register
