const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

const PORT = 6000
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
});

const morgan = require('morgan')
app.use(morgan('dev'))

const cors = require('cors')
app.use(cors())