let express = require('express')
var router = express.Router()

router.use((req,res,next) => {

    console.log({
        time:new Date(),
        message:'doing something rn'
    })
    next()
    
})

router.get('/', (req,res) => {
    res.json({
        message:'OMG! Welcome!!!'
    })
})

module.exports = router