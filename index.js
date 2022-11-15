let express = require("express")

let {connect}=require("mongoose")


let app = express()


app.use(express.json())

let connectdb = ()=>connect("mongodb://127.0.0.1:27017/fargo")

 
  let Port = process.env.PORT || 8080
  
  
  app.listen(Port,async()=>{
     console.log("server is running on 8080")
     await connectdb()
  })

  let userController=require("./src/controller/user.controller")
  app.use("/user",userController)