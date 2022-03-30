require('dotenv').config()
const express = require('express') // import Express Library of Node JS(JavaScript)
const mongoose = require('mongoose') // import mongoose ORM(Object Relation Model) for Mongo DB(DataBase)
const cors = require('cors')
const app = express() // Express Instance
const BirdsModel = require('./models/abc')
const multer = require('multer')
const path = require('path')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const { v4: uuid } = require('uuid')

const bodyParser = require('body-parser')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))

//routes
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

//Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/Images')
  },
  filename: (req, file, cb) => {
    cb(null, uuid() + file.originalname)
  },
})

const upload = multer({ storage: storage })
//End of Storage

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

app.post('/insert', upload.single('imageBird'), async (req, res) => {
  const birdName = req.body.birdName
  const temp = req.body.birdTemp
  const size = req.body.birdSize
  const details = req.body.birdDetails
  const food = req.body.birdFood
  const image = req.file.filename

  const bird = new BirdsModel({
    birdName: birdName,
    temprature: temp,
    size: size,
    food: food,
    details: details,
    image: image,
  })
  try {
    await bird.save()
  } catch (err) {
    console.log(err)
  }
})

app.get('/read', async (req, res) => {
  BirdsModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})

app.get('/read/:id', async (req, res) => {
  const id = req.params.id
  const bird = await BirdsModel.findById(id)
  console.log(bird)
  res.send(bird)
})
// Admin Portal

app.get('/upload', (req, res) => {
  res.render('upload')
})
app.post('/upload', upload.single('testImage'), (req, res) => {
  res.send('Uploaded')
})

app.listen(3001, () => {
  console.log('Server is Running on Port 3001')
})
