const express = require('express');
const mongodb = require('mongodb');


const router = express.Router();

//Get Posts
router.get('/',async (req,res)=> {

const posts = await loadPoostCollection();
res.send(await posts.find({}).toArray());
});


//Add Posts

router.post('/', async(req,res)=>{
    const posts = await loadPoostCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});


// Delete Posts

router.delete('/:d', async(req,res)=>{
    const posts = await loadPoostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id) });
res.status(200).send();
});



async function loadPoostCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://user:group12@ds255917.mlab.com:55917/vue_express',{
        useNewUrlParser:true
    });

    return client.db('vue_express').collection('posts');
}

module.exports = router;