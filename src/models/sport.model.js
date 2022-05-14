const { Schema, model } = require('mongoose');

const SchemaSports = Schema({
    name: {
        type: String,
    },
    players: {
        type: Number,
    }
});

module.exports = model('Sport', SchemaSports);