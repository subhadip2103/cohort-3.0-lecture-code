const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const User=new Schema({
    email:{type:String,unique:true},
    password:String
})

const Admin=new Schema({
    email:String,
    password:String
})

const Course=new Schema({
    courseName:String,
    courseDuration:String
})

const Purchase= new Schema()


const UserModel= mongoose.model("users",User);
const AdminModel=mongoose.model("admin",Admin);
const CourseModel=mongoose.model("courses",Course)
const PurchaseModel=mongoose.model("purchases",Purchase)

module.exports=({
    UserModel:UserModel,
    AdminModel:AdminModel,
    CourseModel:CourseModel,
    PurchaseModel:PurchaseModel
})