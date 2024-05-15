import mongoose from "mongoose"
const orderItemSchema=new mongoose.Schema({ productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
},quantity:{
    type:Number,
    required:true,
},

})
export const Order=mongoose.model("Product",orderItemSchema)