const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/')

app.listen(port, () => {
    console.log('Listening on port: ', port)
})