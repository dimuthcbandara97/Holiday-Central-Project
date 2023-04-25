const express = require('express');
const router = express.Router()
const SubscriberModel = require('../models/subscribermodel')

// Getting all subscribers
router.get('/',async (req,res)=>{
    try{
        const subscribers = await SubscriberModel.find()
        res.json(subscribers)
    } catch(err){
        res.status(500).json({message: err.message})
    }
})
// Getting one subscriber
router.get('/:id', async(req,res)=>{
    res.send(req.params.id)
})
// Creating one subscriber
router.post('/', async(req,res)=>{
    const subscriber = new SubscriberModel({
        name: req.body.name,
        subscriberToChanel:req.body.subscriberToChanel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
// Updating one subscriber
router.patch('/:id',(req,res)=>{
    
})
// Deleting one subscriber
router.delete('/:id',(req,res)=>{
    
})

module.exports = router