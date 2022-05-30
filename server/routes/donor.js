const app = require('express').Router()
const DonorModel = require('../models/donor')



// app.get('/read/:id', async (req, res) => {
//   const id = req.params.id
//   const bird = await BirdsModel.findById(id)
//   console.log(bird)
//   res.send(bird)
// })

app.get('/read', async (req, res) => {
  console.log('Donors Data Fetched')
  DonorModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)
  })
})


app.post('/insert', async (req, res) => {
  console.log('===========================')
  console.log(req.body)
  console.log('===========================')
  const name = req.body.name
  const email = req.body.email
  const city = req.body.city
  const state = req.body.state
  const zip = req.body.zip
  const address = req.body.address
  const phno = req.body.phno

  const donor = new DonorModel({ 
    name: name,
    email: email,
    city: city,
    state: state,
    zip: zip,
    address: address,
    phno: phno
  })
  try {
    await donor.save()
    console.log("Record Added")
  } catch (err) {
    console.log(err)
  }
})

// app.delete('/delete/:id', async (req, res) => {
//   const id = req.params.id
//   const bird = await BirdsModel.findById(id)
//   fs.unlink('./public/Images/' + bird.image, (err) => {
//     if (err) console.log(err)
//     else {
//       console.log('\nDeleted Image')
//     }
//   })
//   await BirdsModel.findByIdAndRemove(id).exec()
//   res.send('Item Deleted !!')
// })

module.exports = app
