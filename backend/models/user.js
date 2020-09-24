const mongoose=require('mongoose');
const { isEmail }=require('validator')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({

    firstname:{
        type:String,
        required:[true,'first name is required'],
        maxlength:32
    },
    lastname:{
        type:String,
        required:[true,'last name is required'],
        maxlength:32
    },
    email:{
        type:String,
        required:[true,'email is required'],
        maxlength:32,
        unique:true,
        validate:[isEmail,'email is not valid']
    },
    password:{
        type:String,
        required:[true,'password is required'],
        minlength:[6,'minimum password is 6 character']
    },
    username:{
        type:String
    }

})


userSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    this.username=this.firstname.slice(0,1)+this.lastname.slice(0,1);
    next();
});


//static method to login user
userSchema.statics.login=async function(email,password){
    const user=await this.findOne( { email } );
    if(user){
        const auth=await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}


const blogUser=mongoose.model('blogUser',userSchema)

module.exports=blogUser