let express = require("express")

let {connect}=require("mongoose")


let app = express()


app.use(express.json())

let connectdb = ()=>connect("mongodb+srv://arman992:arman992@cluster0.y1bch.mongodb.net/fargo")

 
  let Port = process.env.PORT || 8080
  
  
  app.listen(Port,async()=>{
     console.log("server is running on 8080")
     await connectdb()
  })

  let userController=require("./src/controller/user.controller")
  app.use("/",userController)