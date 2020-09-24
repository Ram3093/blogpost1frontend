const Blog=require('../models/newblog');
const blogUser=require('../models/user');
const jwt=require('jsonwebtoken');

//handle errors
const handleErrors=(err)=>{
   // console.log(err.message,err.code)

    const errors={ email:"",password:"",blogtitle:"",blogsnippet:"",blogbody:"" }

    //login email error
    if(err.message==='incorrect email'){
        errors.email=err.message;
    }
    //login password error
    if(err.message==='incorrect password'){
        errors.password=err.message;
    }
    //duplicate error code
    if(err.code===11000){
        errors.email="that email is already registered";
        return errors;
    }
  //validation errors
  if(err.message.includes('blogUser validation failed')){
      //console.log(err)
      Object.values(err.errors).forEach(({ properties })=>{
          errors[properties.path]=properties.message
      })
  }

  if(err.message.includes('blog validation failed')){
   Object.values(err.errors).forEach(({ properties })=>{
      errors[properties.path]=properties.message
  })
  }
//console.log(errors)
  return errors;


}

const maxAge=3*24*60*60;

//json code
const createToken=(id)=>{
    return jwt.sign({ id },'my top secret.',{
        expiresIn:maxAge
    });
}

module.exports.create=async(req,res)=>{

   const { blogtitle, blogsnippet,blogbody }=req.body;
   try{
      const blog=await Blog.create({ blogtitle,blogsnippet,blogbody });
      res.status(201).json({user:blog._id});
   }catch(err){
     // console.log(err);
     const erros=handleErrors(err)
      
     res.status(400).json( {erros}  ); 
   }
   
}


module.exports.signup_post=async(req,res)=>{
   
   const { lastname,firstname,email,password }=req.body;
   try{
   const user=await blogUser.create({email,password,lastname,firstname})
   const token=createToken(user._id);
  // res.cookie('jwt',token,{ httpOnly:true, maxAge:maxAge*1000 })
        res.status(201).json({user:user._id,jwt:token,username:user.username }  )
   }catch(err){
       const erros=handleErrors(err)
      
       res.status(400).json( {erros}  ); 
     
   }

  
}

module.exports.login_post=async(req,res)=>{
   const { email,password }=req.body;

     try{
         const user=await blogUser.login(email,password);
         const token=createToken(user._id);
        // res.cookie('jwt',token,{ httpOnly:true, maxAge:maxAge*1000 })
         res.status(200).json({ user:user._id ,jwt:token,username:user.username })

     }catch(err){
        const erros=handleErrors(err)
        //console.log(erros);
        res.status(400).json({erros}); 
        // res.status(400).json({});
     }
 }