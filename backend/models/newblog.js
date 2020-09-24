const mongoose=require('mongoose');

const NewBlogSchmea=new mongoose.Schema({

    blogtitle:{
        type:String,
        required:[true,'blog title is required'],
        maxlength:[16,'max blog title length is 16 character']
    },
    blogsnippet:{
        type:String,
        required:[true,'blog snippet is required'],
        maxlength:[32,'max blog snippet length is 32 character']
    },
    blogbody:{
        type:String,
        required:[true,'blog body is required'],
        maxlength:[200,'max blog body length is 2000 character']
    }

},{timestamps:true})

const Blog=mongoose.model('blog',NewBlogSchmea);

module.exports=Blog