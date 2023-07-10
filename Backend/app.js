const express = require('express')
const app = express();
const PORT = 6000
const morgan = require('morgan')
const cors = require('cors')
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())