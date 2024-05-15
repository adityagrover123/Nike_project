import mongoose from "mongoose"
const productSchema=new mongoose.Schema({
    view_product_details:{
        description:{
            type:String,
            required:true,
        },
        reviews:{
            type:String,
        },
        rating:{
            type:Number,
        }

    },
    product_id:{
        type:String,
        required:true,
    },
    size:{
        UK:{
            type:Number,
            required:true,
        },
        India:{
            type:Number,
            required:true,
        }
    },
    name:{
        type:String,
        required:true,
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        default:0,
        type:Number,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    // category:{
    // enum:["NEW FEATURED","MEN","WOMEN","KIDS","SALE","SNKRS","SPORTS"],
    // default:"SALE", 
    // },
    owner:{
        type:mongoose.Schema.Types.objectId,
        ref:"User"
    },
},{timestamps:true})
export const Product=mongoose.model("Product",productSchema)