let express = require('express')
let mongoose = require('mongoose')
var router = express.Router()

router.use((req, res, next) => {
    // console.log({
    //     time: new Date(),
    //     message: 'doing something rn'
    // })
    next()
})

let Room = require('../models/room')

router.get('/', (req, res) => {
    res.json({
        message: 'OMG! Welcome!!!'
    })
})

router.route('/rooms')
    .post((req, res) => {

        let new_room = new Room()

        new_room.timestamp = new Date()
        new_room.title = req.body.title
        new_room.description = req.body.description

        new_room.save((err) => {
            if (err) res.send(err)
            res.json({
                message: 'Room Created'
            })
        })

    })
    .get((req, res) => {
        Room.find((err, data) => {
            if (err) res.send(err)
            res.json(data)
        })
    })

router.route('/rooms/:room_id')
    .get((req, res) => {
        Room.findById(req.params.room_id, (err, data) => {
            if (err) res.send(err)
            res.json(data)
        })
    })
    .put((req, res) => {
        Room.findById(req.params.room_id, (err, data) => {

            if (err) res.send(err)
            data.title = req.body.title
            data.description = req.body.description


            data.save((err) => {
                if (err) res.send(err)
                res.json({
                    message: 'Room Details Updated'
                })
            })
        })
    })
    .delete((req,res) => {
        Room.remove({
            _id:req.params.room_id
        }, (err) => {
            if(err) res.send(err)
            res.json({
                message:`room ${req.params.room_id} was deleted`
            })
        })
    })


router.route('/rooms/:room_id/notes')
    .get((req, res) => {
        Room.findById(req.params.room_id, (err, data) => {
            if (err) res.send(err)
            res.json(data.notes)
        })
    })
    .put((req, res) => {
        console.log(req.body)
        Room.findByIdAndUpdate(req.params.room_id, {
            $push: {
                notes: req.body
            }
        }, (err) => {
            if (err) res.send(err)
            res.json({
                message: 'a note was added'
            })
        })
    })
    .delete((req, res) => {
        console.log('uhhhh....')
        Room.findByIdAndUpdate(req.params.room_id,
            {$pull:{notes:{_id:req.body.id}}},
            (err, data) => {
                if(err) res.send(err)
                res.json({
                    msg:"uhhhh"
                })
            }
            )
    })

module.exports = router