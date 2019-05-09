var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    img: String,
    date: String,
    desc: String,
    focus: String,
    link: String,
    tech: String,
});

module.exports = mongoose.model('Projects', schema);