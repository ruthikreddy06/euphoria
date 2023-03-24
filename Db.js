const mongoose=require('mongoose');
const mongouri="mongodb://localhost:27017/techfest";
const connecttoMongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log("connected to mongo");
    })
}
module.exports=connecttoMongo;