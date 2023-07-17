import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'

import propertyRouter from './routes/property.routes.js'
import userRouter from  './routes/user.routes.js'



dotenv.config()


const app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}))


app.get('/', (req, res)=>{
    res.send({msg:'hello world'})
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/properties', propertyRouter)

const startServer = async() => {
 
    try {
        // connect to database
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, ()=> console.log('server is listening on port http://localhost:8080'))
    } catch (error) {
        console.log(error)
    }
}

 startServer()