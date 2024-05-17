const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: password,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    mobNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        enum: ['Customer', 'Admin', 'Super-Admin'],
        default: 'Customer'
    },
    address: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    Orders: [{
        // ref of products schema 
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductModel",
    }],
    wishlist:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ProductModel",
            }
        ],
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductModel",
    }
})

module.exports = mongoose.model('UserModel', userSchema);