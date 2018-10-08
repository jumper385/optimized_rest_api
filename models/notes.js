let mongoose = require('mongoose')
let Schema = mongoose.Schema

let NotesSchema = new Schema({
    timestamp:Number,
    room_id:String,
    notes_id:String,
    title:String,
    text:String,
})

module.exports = mongoose.model('Notes', NotesSchema)