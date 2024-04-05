const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://antariksh157:antariksh123@cluster0.yxfplld.mongodb.net/ohfoodmern?retryWrites=true&w=majority&appName=Cluster0'

// const mongoDB =async() =>{
//    await mongoose.connect(mongoURI).then(()=>{console.log("connected") 
//         const fetched_data =await mongoose.connection.dbcollection("food_items");
//         fetched_data.find({}).toArray(function(err, data){
//           if(err) console.log(err)
//           else console.log(data)
//         })
// }).catch((err) => {console.log("---",err)})   
// };


  
const mongoDB = async () => {
     try {
         await mongoose.connect(mongoURI);
         console.log("Connected to MongoDB");
         const fetched_data =await mongoose.connection.dbcollection("food_items");
         fetched_data.find({}).toArray(function(err, data){
           if(err) console.log(err)
           else console.log(data)
         })
     } catch (error) {
         console.error("Error connecting to MongoDB:", error);
     }
 };
 

module.exports = mongoDB;