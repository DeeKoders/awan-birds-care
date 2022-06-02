const app = require('express').Router()
const BirdsModel = require('../models/abc')
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

app.get('/read/:id', async (req, res) => {
  const id = req.params.id
  const bird = await BirdsModel.findById(id)
  console.log(bird)
  res.send(bird)
})

app.get('/read', async (req, res) => {
  console.log('first')
  BirdsModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})

app.get('/readBySize/:name', async (req, res) => {
  const name = req.params.name
  console.log(name)
  BirdsModel.find({size: name}, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})

app.post('/insert', upload.single('imageBird'), async (req, res) => {
  const birdName = req.body.birdName
  const temp = req.body.birdTemp
  const size = req.body.birdSize
  const details = req.body.birdDetails
  const food = req.body.birdFood
  const type = req.body.birdType
  const image = req.file.filename

  const bird = new BirdsModel({
    birdName: birdName,
    temprature: temp,
    size: size,
    type: type,
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

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id
  const bird = await BirdsModel.findById(id)
  fs.unlink('./public/Images/' + bird.image, (err) => {
    if (err) console.log(err)
    else {
      console.log('\nDeleted Image')
    }
  })
  await BirdsModel.findByIdAndRemove(id).exec()
  res.send('Item Deleted !!')
})

module.exports = app
