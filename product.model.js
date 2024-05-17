const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    style:{
        type:String,
    },
    description: {
        type: String,
        required: true
    },
    // price: {
    //     type: Number,
    //     required: true,
    //     min: 0
    // },
    size:[{
        india:{
            type:String
        },
        uk:{
            type:String
        },
        stock:{
            type:Number,
            required:true,
            default:0
        },
        // setting price for individual size of item
        price:{
            type:Number,
            required:true,
            default:99
        },
        discount:{
            type:Number,
            default:0
        },
        discountedPrice:{
            type:Number,
        },
        color:[{
            type:String,
            required:true
        }]
    }],
    category: {
        // confusion in setting the discount category wise on product
        type:String,
        enum:["Men","Women","Sale","Sports","Sneakrs","Kids","New-Arrival"],
        default:"New-Arrival"
    },
    imageUrl:[{
        type:String,
    }],
})
module.exports = mongoose.model("ProductModel",ProductSchema)