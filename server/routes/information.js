// const app = require('express').Router()
// const BirdsModel = require('../models/abc')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './Images')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   },
// })
// const upload = multer({ storage: storage })

// app.post('/insert', upload.single('imageBird'), async (req, res) => {
//   const birdName = req.body.birdName
//   const temp = req.body.birdTemp
//   const size = req.body.birdSize
//   const details = req.body.birdDetails
//   const food = req.body.birdFood
//   console.log('error')
//   console.log(req.file)
//   const image = req.file.name

//   const bird = new BirdsModel({
//     birdName: birdName,
//     temprature: temp,
//     size: size,
//     food: food,
//     details: details,
//     image: image,
//   })
//   try {
//     await bird.save()
//   } catch (err) {
//     console.log(err)
//   }
// })

// app.get('/read', async (req, res) => {
//   BirdsModel.find({}, (err, result) => {
//     if (err) {
//       res.send(err)
//     }

//     res.send(result)
//   })
// })

// app.get('/read/:id', async (req, res) => {
//   const id = req.params.id
//   const bird = await BirdsModel.findById(id)
//   console.log(bird)
//   res.send(bird)
// })
// // Admin Portal

// app.get('/upload', (req, res) => {
//   res.render('upload')
// })
// app.post('/upload', upload.single('testImage'), (req, res) => {
//   res.send('Uploaded')
// })

// module.exports = app
