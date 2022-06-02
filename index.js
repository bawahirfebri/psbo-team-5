const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Import Routes
const booksRoute = require('./routes/books')

app.use('/api/books', booksRoute)

// Connect to DB
mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to MongoDB");
    }
  );

  // Listen Server
const PORT = process.env.PORT
app.listen(
    PORT, () => {
    console.log(`Server started on port ${PORT}`)
})