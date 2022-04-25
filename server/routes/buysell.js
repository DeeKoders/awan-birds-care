const app = require('express').Router()
const SellModel = require('../models/sell')
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
  console.log(req.file.filename)
  const birdName = req.body.birdName
  const age = req.body.birdAge
  const details = req.body.birdDetails
  const price = req.body.birdPrice
  const image = req.file.filename

  const bird = new SellModel({
    birdName: birdName,
    age: age,
    price: price,
    details: details,
    image: image,
  })
  console.log('Ready to Save')
  try {
    await bird.save()
  } catch (err) {
    console.log(err)
  }
})
//buy/sell read

app.get('/read', async (req, res) => {
  SellModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})

module.exports = app
