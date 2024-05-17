const mongoose = require('mongoose');
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
//     // OR-id{
        
//     // }
//     product_id:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Product"

    // ],
    customer:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"UserModel"
    },
    orderItems:
    [
        {

            type:mongoose.Schema.Types.ObjectId,
            ref:"ProductModel",
        }
    ],
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
    },
},{timestamps:true})
export const Order=mongoose.model("Order",orderSchema)