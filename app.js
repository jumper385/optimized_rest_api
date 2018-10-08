// NODE Packages
let express = require('express')
let helmet = require('helmet')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

// Defined ROUTERS
let api_route = require('./routes/api')

// Database Config
let MDBUsername = 'nova'
let MDBPassword =  'CH8lfDH45RTmaADK'
let MDBServer = `mongodb://${MDBUsername}:${MDBPassword}@restsandbox-shard-00-00-ztrfz.gcp.mongodb.net:27017,restsandbox-shard-00-01-ztrfz.gcp.mongodb.net:27017,restsandbox-shard-00-02-ztrfz.gcp.mongodb.net:27017/test?ssl=true&replicaSet=RestSandbox-shard-0&authSource=admin&retryWrites=true`
mongoose.connect(MDBServer, { useNewUrlParser: true })

const port = process.env.PORT || 3001
const app = express()

app.use(helmet.hidePoweredBy({setTo: 'PHP/5.4.0'}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api_route)

app.listen(port, _ => console.log('user has connected'))
console.log(`ACCESS THE API HERE: http://localhost:${port}`)