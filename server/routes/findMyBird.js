const app = require('express').Router()
const FindModel = require('../models/findMyBird')
const fs = require('fs')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  },
})
const upload = multer({ storage: storage })

app.post('/insert', upload.single('imageBird'), async (req, res) => {
  const birdName = req.body.birdName
  const size = req.body.birdSize
  const color = req.body.birdColor
  const type = req.body.birdType
  const image = req.file.filename

  const bird = new FindModel({
    birdName: birdName,
    size: size,
    type: type,
    color: color,
    image: image,
  })
  try {
    await bird.save()
  } catch (err) {
    console.log(err)
  }
})

app.get('/read/:id', async (req, res) => {
  const id = req.params.id
  const bird = await BirdsModel.findById(id)
  console.log(bird)
  res.send(bird)
})

app.get('/readByName/:name', async (req, res) => {
  const name = req.params.name
  FindModel.find({ $text: { $search: name } }, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.get('/readBySize/:size', async (req, res) => {
  const size = req.params.size
  FindModel.find({ size: size }, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})
app.get('/readByColor/:color', async (req, res) => {
  const color = req.params.size
  FindModel.find({ color: color }, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})
app.post('/insert', upload.single('imageBird'), async (req, res) => {
  const birdName = req.body.birdName
  const size = req.body.birdSize
  const color = req.body.birdColor
  const type = req.body.birdType
  const image = req.file.filename

  const bird = new FindModel({
    birdName: birdName,
    color: color,
    size: size,
    type: type,

    image: image,
  })
  try {
    await bird.save()
  } catch (err) {
    console.log(err)
  }
})
module.exports = app
