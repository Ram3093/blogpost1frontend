import React, { Component } from 'react'
import { api } from '../../backend'


class NewBlog extends Component {
    state={
        title:"",
        snippet:"",
        body:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
   
    handleSubmit=async(e)=>{
        e.preventDefault();
        //console.log(this.state);
        const { title:blogtitle,snippet:blogsnippet,body:blogbody}=this.state;
        document.querySelector('.blogtitle.error').textContent='';
        document.querySelector('.blogsnippet.error').textContent= '';
        document.querySelector('.blogbody.error').textContent=    ''
        try{
            const res=await fetch(`${api}/create` , {
               method:'POST',
               body:  JSON.stringify({ blogtitle,blogsnippet,blogbody }),
               headers:{ 'Content-type':'application/json'}
            });
            const data=await res.json();
            console.log(data);
            if(data.erros){
              document.querySelector('.blogtitle.error').textContent=data.erros.blogtitle;
              document.querySelector('.blogsnippet.error').textContent=data.erros.blogsnippet;
              document.querySelector('.blogbody.error').textContent=data.erros.blogbody;
             

             console.log(data,'fgdfgdg');
            }
            if(data.user){
               
                  this.props.history.push('/')
            }
          }catch(err){
              console.log(err)
          }

    }

    

    render() {
        return (
            <div className='container'>
                <div className="create-blog content">
                <form onSubmit={ this.handleSubmit } >
                   <div className="form-group">
                     <label htmlFor="title">Blog title</label>
                     <input type="text" className="form-control" placeholder="Enter blog title" onChange={ this.handleChange } id="title" />
                     <div className='blogtitle error'></div>
                   </div>
                   <div className="form-group">
                     <label htmlFor="snippet">Blog snippet</label>
                     <input type="text" className="form-control" placeholder="Enter blog snippet" onChange={ this.handleChange } id="snippet" />
                     <div className='blogsnippet error'></div>
                   </div>
                   <div className="form-group">
                       <label htmlFor="body">Blog body</label>
                       <textarea className="form-control" rows="5" onChange={ this.handleChange } id="body" placeholder="Enter blog body" ></textarea>
                       <div className='blogbody error'></div>
                   </div>
                   <button type="submit" className="btn btn-primary">New blog</button>
                </form>
                </div>
 
            </div>
        )
    }
}

export default NewBlog



