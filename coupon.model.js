const mongoose = require('mongoose');
const couponSchema=new mongoose.Schema({

  coupon:{
    code: { 
      type: String,
       required: true, 
       unique: true 
      },
    description: 
    {
       type: String 
      },
    discountType: {
       type: String, 
       enum: ['percentage', 'fixed'], 
       required: true
       },
    discountValue: 
    { type: Number,
       required: true
       },
    maxDiscount: {
       type: Number 
      }, // Optional
    validFrom:{
       type: Date,
       required: true 
      },
    validUntil: {
       type: Date, 
      required: true },
    usageLimit: {
       type: Number 

    }, // Optional
    usedCount: {
       type: Number, 
      default: 0

     },
    status: { 
      type: String, 
      enum: ['active', 'expired'], 
    default: 'active' 

    }
  }
}
);


// // Add an index to the 'code' field for faster lookups
// couponSchema.index({ code: 1 });

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
