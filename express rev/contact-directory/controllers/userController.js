const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//@desc Register a user
//@route POST api/users/register
//@access public
const resgisterUser = asyncHandler(async(req,res)=>{
      const {username , email, password} = req.body;

      if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory ")
      }
      //check if user already available
      const userAvailable = await User.findOne({email});
      if(userAvailable){
        res.status(400);
        throw new Error("User already registered")
      }

      //hashed password
      const hashedpassword = await bcrypt.hash(password, 10);
      console.log("Hased password:", hashedpassword)

      const user = await User.create({
        username,
        email,
        password: hashedpassword,

      });
      console.log(`User created ${user} `);
      if(user){
        res.status(201).json({_id: user.id, email : user.email})
      }
      else{
        res.status(400);
        throw new Error ("User data not valid")
      }



    res.json({message:"Register the user"})
})


//@desc login a user
//@route POST api/users/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({email});
    //compare password with hashedpassword
    //user.password -> saved in db 
    if(user &&(await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            //payload
            user:{
                username : user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: "15m"})
        res.status(200).json({accessToken});
    } else{
        res.status(401)
        throw new Error("email or paww is not valid");
        
    }
})


//@desc current user info
//@route POST api/users/register
//@access private 
const currentUser =asyncHandler((req,res)=>{
    res.json(req.user)
})


module.exports = {resgisterUser, loginUser, currentUser}
