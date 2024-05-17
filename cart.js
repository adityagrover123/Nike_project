const mongoose = require('mongoose');
const cartschema=new mongoose.Schema(
    {
        cart:[
            {
                type:mongoose.SchemaType.Types.ObjectId,
                ref:"ProductModel",
            }
        ],
        price:{
            type:Number,
            default:0,

        }
    },{Timestamps:true}
)
module.exports=mongoose.model("CartModel",cartschema)