import React, { Component } from 'react'
import { api } from '../../backend'
import axios from 'axios'
import moment from 'moment'

export class Home extends Component {
    state={
        blogs:[ ]
    }
    componentDidMount(){
       axios.get(`${api}`)
        .then(res=>{
            this.setState({ blogs:res.data.slice(0,10)})
        })
    }
    render() {
        const { blogs }=this.state;
        const allblogs=blogs.length?(
            blogs.map(el=>{
                return (
                    <div  key={el._id}>
                       <h2>{el.blogtitle}</h2>
                       <h5>{ el.blogsnippet }</h5>
                       <p  style={{marginBottom:"0"}}>{ el.blogbody }</p>
                        <p>{ moment(el.createdAt).calendar() }</p>
                    </div>
                )
            })
           
        ):(<div><p>nothing to show </p></div>)
        return (
            <div className='container home'>
               <div>
                 { allblogs }
               </div>
            </div>
        )
    }
}

export default Home
