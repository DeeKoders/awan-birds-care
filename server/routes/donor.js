const app = require('express').Router()
const DonorModel = require('../models/donor')



app.get('/readPending', async (req, res) => {
  DonorModel.find({approve: 'false'}, (err,cb)=>{
    if(err){
      console.log(err)
    }
    res.send(cb)
  })
  
})

app.get('/readApproved', async (req, res) => {
  DonorModel.find({approve: 'true'}, (err,cb)=>{
    if(err){
      console.log(err)
    }
    console.log(cb)
    res.send(cb)
  })
  
})

app.get('/read', async (req, res) => {
  console.log('Donors Data Fetched')
  DonorModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})
app.put('/approve/:id', async (req, res) => {
  id = req.params.id
  DonorModel.findByIdAndUpdate(id, {approve:'true'}, (err,cb) => {
    if(err){
      console.log(err)
    }
    else(
      res.send(cb)
    )
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
  const approve = req.body.approve

  const donor = new DonorModel({ 
    name: name,
    email: email,
    city: city,
    state: state,
    zip: zip,
    address: address,
    phno: phno,
    approve: approve
  })
  try {
    await donor.save()
    console.log("Record Added")
  } catch (err) {
    console.log(err)
  }
})

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id
  await DonorModel.findByIdAndRemove(id).exec()
  res.send('Item Deleted !!')
})

module.exports = app
