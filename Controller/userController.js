
const users=require ('../Models/userModel')
const jwt = require ('jsonwebtoken')

exports.userRegister=async(req,res)=>{
    const{username,email,password}=req.body
    // console.log(username,email,password)
    try {
        const existingUser = await users.findOne({email})
        if (existingUser) {
            res.status(406).json("User Already Exist!!")
        } else
         { const newUser = new users({username,password,email,profile:"",github:"",linkdin:""})
         await newUser.save()
         res.status(200).json(newUser)
        }
    
    } 
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
    
}

exports.userLogin=async (req,res)=>{
    const{email,password}=req.body
    try {
        const existingUser = await users.findOne({email,password})
        console.log(existingUser);
        if (existingUser) {
            // const secretKey="secretkey123"
            const token=jwt.sign({userId:existingUser._id},process.env.secretKey)
            // console.log(token)
            res.status(200).json({token,user:existingUser.username})
            
        } 
        else {
            res.status(406).json("Invalid Username/Password")
            
        }
    } 
    catch (err) 
    {
        res.status(404).json(err)
        
    }
}