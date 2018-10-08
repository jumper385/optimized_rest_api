let mongoose = require('mongoose')
let Schema = mongoose.Schema

let NoteSchema = new Schema({
    timestamp:Date,
    title:String,
    notes:String,
})

let RoomSchema = new Schema({
    timestamp:Date,
    title:String,
    description:String,
    notes:[NoteSchema]
})

module.exports = mongoose.model('Room', RoomSchema)