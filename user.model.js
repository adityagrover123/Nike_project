import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    NAME:{
        first_name:{
        type:String,
        required:true,
        unique:true,
        
        lowercase:true,
        },
        last_name:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        // nearby:{
        //     type:String,
        // },
        city:{
            type:String,
        },
        pincode:{
            required:true,
            type:String,
        }
    },
    // Find_a_Nike_Store:{
       
    // }
    favourites:{
        type:mongoose.Schema.Types.objectId,
        ref:"Product",
    },
    CART:{

            type:[orderItemSchema],
    },

},{timestamps:true})
export const user=mongoose.model("user",userSchema)