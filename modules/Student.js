const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  name:String,
  emailid:String,
  phoneno:String,
  studentid:String,
  techevent:String
});
const User=mongoose.model('userinfo',blogSchema);
module.exports=User;