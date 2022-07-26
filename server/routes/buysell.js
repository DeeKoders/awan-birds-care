const app = require('express').Router()
const SellModel = require('../models/sell')
const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  },
})
const upload = multer({ storage: storage })
app.put('/updatePrice/:id', async (req, res) => {
  const id = req.params.id
  console.log(req.body.price)
  SellModel.findOneAndUpdate(
    { _id: id },
    { $set: { price: req.body.price } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log('Something wrong when updating data!')
      }

      console.log(doc)
    }
  )
})
app.post('/insert', upload.single('imageBird'), async (req, res) => {
  console.log(req.file.filename)
  const birdName = req.body.birdName
  const sellerName = req.body.sellerName
  const sellerLocation = req.body.sellerLocation
  const sellerNumber = req.body.sellerNumber
  const type = req.body.type
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
    sellerName: sellerName,
    sellerNumber: sellerNumber,
    sellerLocation: sellerLocation,
    type: type,
  })
  console.log('Ready to Save')
  try {
    await bird.save()
  } catch (err) {
    console.log(err)
  }
})
//buy/sell read
app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id
  const bird = await SellModel.findById(id)
  fs.unlink('./public/Images/' + bird.image, (err) => {
    if (err) console.log(err)
    else {
      console.log('\nDeleted Image')
    }
  })
  await SellModel.findByIdAndRemove(id).exec()
  res.send('Item Deleted !!')
})
app.get('/readBySize/:name', async (req, res) => {
  const name = req.params.name
  console.log(name)
  await SellModel.find({ size: name }, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})
app.get('/readByCategory/:name', async (req, res) => {
  const name = req.params.name
  console.log(name)
  await SellModel.find({ type: name }, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})
app.get('/read', async (req, res) => {
  SellModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})

app.get('/read/:id', async (req, res) => {
  const id = req.params.id
  const bird = await SellModel.findById(id)
  console.log(bird)
  res.send(bird)
})

module.exports = app
