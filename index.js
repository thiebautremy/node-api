const express = require('express')
const app = express()
require('./models/dbConfig')
const postsRoutes = require('./routes/postsController')
const bodyParse = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors(
    {
        origin: 'https://authoriseSite.com'
    }
))
app.use(bodyParse.json())
app.use('/posts', postsRoutes)
app.listen(5500, () => console.log('Server starting'))