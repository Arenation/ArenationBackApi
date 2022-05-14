const { Schema, model } = require('mongoose');

const SchemaUsers = Schema({
    names: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    lastnames: {
        type: String,
        required: [true, "El apellido es requerido"],
    },
    email: {
        type: String,
        required: [true, "El email es requerido"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"]
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN', 'VISITOR'],
    },
    date: {
        type: Date,
        required: true,
    }
});

module.exports = model('User', SchemaUsers);