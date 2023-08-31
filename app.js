require('dotenv').config()
// async errors
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require("./middleware/error-handler")
const productsRoute = require('./routes/products')

// middlewares
app.use(express.json())

// routes
app.get('/',(req,res) => {
    res.send('<h1>StoreAPI</h1><a href="/api/v1/products">products route</a>')
})
app.use("/api/v1/products",productsRoute)

// error and not found middleware
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()