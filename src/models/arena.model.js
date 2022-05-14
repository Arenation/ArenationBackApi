const { Schema, model } = require('mongoose');

const SchemaArenas = ({ 
    sportId: {
        type: Schema.Types.ObjectId,
        ref: 'Sport',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    images: {
        type: [String],
    },
    surfaceType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    facility: {
        type: [String]
    },
    price: {
        type: Number,
        required: true
    },
    reviews: {
        type: [{}]
    }
});

module.exports = model('Arena', SchemaArenas);