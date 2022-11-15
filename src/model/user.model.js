// Name, email, phone number



let {Schema,model} = require("mongoose")


let userSchema = new Schema({
    username:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String},
    phonenumber:{required:true,type:Number}
})



module.exports= model("user",userSchema)