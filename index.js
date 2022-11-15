let express = require("express")

let {connect}=require("mongoose")


let app = express()


app.use(express.json())



  connect("mongodb://127.0.0.1:27017/fargo",{useNewUrlParser:true,
  useUnifiedTopology:true
 },(err) => {
      if(err) {console.log(err) }
      else {console.log("mongdb is connected")}})
  let Port = process.env.PORT || 8080
  
  
  app.listen(Port,async()=>{
     console.log("server is running on 8080")
     
  })

  let userController=require("./src/controller/user.controller")
  app.use("/user",userController)