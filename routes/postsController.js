const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const {PostsModel} = require('../models/postsModel')

router.get('/', (req, res) =>{
    PostsModel.find((err, docs) => {
        if(!err) res.send(docs)
        else console.log('ERROR TO GET DATA' + err)
        
    })
})

router.post('/', (req, res) => {
    const newPost = new PostsModel({
        author: req.body.author,
        message: req.body.message
    })

    newPost.save((err, docs) => {
        if(!err) res.send(docs)
        else console.log(`Error creating new post ${err}`)
        
    })
})

router.put('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Id inconnu : ${req.params.id}`)
    const updateRecord = {
            author: req.body.author,
            message: req.body.message
        }
    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord},
        {new: true},
        (err, docs) => {
            if(!err) res.send(docs)
            else console.log('Error on update' + err)
            
        }
    )
})

router.delete('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Id inconnu : ${req.params.id}`)

    PostsModel.findByIdAndDelete(
        req.params.id,
        (err, docs) => {
            if(!err) res.send(docs)
            else console.log('Error on delete' + err)
            
        }

    )
})

module.exports = router