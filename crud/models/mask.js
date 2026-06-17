const mongoose = require('mongoose');
const maskSchema = new mongoose.Schema({
    serial_number:{
        type: Number,
        required: true,
    },
    model: {
        type: String,
        required: false
    },
    color:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    units:{
        type: Number,
        required: true
    }
},
    {collection: 'Masks'}
);
module.exports = mongoose.model('Mask',maskSchema);