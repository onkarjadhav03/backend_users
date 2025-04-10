require("dotenv").config();
const express=require("express")
const cors=require("cors")
const sequelize=require("./lib/sequelize")
const userModel=require("./models/user")
let app=express()
app.use(express.json())

app.use(cors())

const port=process.env.PORT || 3000

sequelize.sync().then(()=>{
  console.log('Database connected and synced')
}).catch((error)=>{
  console.log("unable to connect to database",error)
})



app.get('/users',async (req,res)=>{
  try{
    const users=await userModel.findAll()
    res.json({users})
  }catch(error){
    console.log(error)
    res.status(500).json({error:'failed to fetch all users'})
  }
    
})

app.get('/users/:id',async(req,res)=>{
  try{
    let id=parseInt(req.params.id);

let user=await userModel.findByPk(id)
    if(user){
     res.json({user})
    }else{
     res.status(404).json({message:"user not found"})
    }
  }catch(error){
    console.log(error)
    res.status(500).json({error:'failed to fetch user'})
  }
    
})

  app.listen(port,()=>{
    console.log(`server running on port ${port}`)
  })