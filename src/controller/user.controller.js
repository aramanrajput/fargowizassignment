let express=require("express")
let router = express.Router()
let User = require("../model/user.model")



router.post("/",async(req,res)=>{
    try{
        let user = await User.create(req.body)
        res.send({user})
    }catch(e){
res.send({error:true,message:e.message})
    }


})
router.get("/",async(req,res)=>{
    try{
        let user = await User.find()
        res.send({error:false,data:user})
    }catch(e){
res.send({error:true,message:e.message})
    }


})


module.exports = router