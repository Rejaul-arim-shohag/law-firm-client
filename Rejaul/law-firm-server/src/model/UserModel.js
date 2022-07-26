const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    Email:{
                type:String,
                unique:true,
                required:true,
                validate:{
                    validator:(v)=>{
                        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                    },
                    message: "Please enter a valid email"
                }
                },
    Password:{type:String},
    image:{type:String},
    isAdmin:{type:Boolean, default:false},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const UsersModel=mongoose.model('users',DataSchema);
module.exports=UsersModel;