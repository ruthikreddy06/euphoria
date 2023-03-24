const express = require('express')
const routes = express()
const userinfo=require('../modules/Student');
const { body, validationResult } = require('express-validator');
//var csvjson = require('csvjson')
const converter = require('json-2-csv')
var fs = require('fs')

routes.post(
    '/',[
    body('emailid').isEmail()
   ,body('name').isLength({min:3}),body('phoneno').isLength({min:10,max:10})],
    async (req, res) => {
      let s=false
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array(),success:s});
      }
      user=await userinfo.create({
        name: req.body.name,
        emailid:req.body.emailid,
        phoneno:req.body.phoneno,
        studentid:req.body.studentid,
        techevent:req.body.techevent

      })
      s=true;

      res.send({user:user,success:s});
    }
  );
  routes.post("/getuser",async(req,res)=>{
    try{
     const data=await userinfo.find({"techevent":req.body.techevent});
  res.send({data});
    
}
catch{
  res.json({error:"server error"})
 }});

module.exports=routes