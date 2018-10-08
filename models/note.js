let mongoose = require('mongoose')
let Schema = mongoose.Schema

let NoteSchema = new Schema({
    timestamp:Date,
    note_id:String,
    title:String,
    text:String,
})

module.exports = mongoose.model('Note', NoteSchema)