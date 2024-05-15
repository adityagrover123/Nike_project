import model from "mongoose"
const categorySchema=new mongoose.Schema({
    name:{
        Array:["NEW FEATURED","MEN","WOMEN","KIDS","SALE","SNKRS","SPORTS"],
        default:"SALE", 
    }
},{timestamps:true})
export const Category=mongoose.model("Category")