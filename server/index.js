require('dotenv').config()
const express = require('express') // import Express Library of Node JS(JavaScript)
const mongoose = require('mongoose') // import mongoose ORM(Object Relation Model) for Mongo DB(DataBase)
const cors = require('cors')

const app = express() // Express Instance
const SellModel = require('./models/sell')
const multer = require('multer')

const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const informationRoutes = require('./routes/information')
const BuySellRoutes = require('./routes/buysell')
const donorRoutes = require('./routes/donor')
const findRoutes = require('./routes/findMyBird')
// const deleteRoutes = require('./routes/delete')
const { v4: uuid } = require('uuid')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))

//routes
app.use('/BirdsInformation', informationRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/BuySell', BuySellRoutes)
app.use('/Donors', donorRoutes)
app.use('/findMyBird', findRoutes)

const db =
  'mongodb+srv://DeeKoders:deekay0312@abc.i8xwk.mongodb.net/awan-birds-care?retryWrites=true&w=majority'

mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => {
    console.log(err)
  })
//buy/sell Insert

app.listen(3001, () => {
  console.log('Server is Running on Port 3001')
})
