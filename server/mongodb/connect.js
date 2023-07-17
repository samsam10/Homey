import mongoose from "mongoose";
// mongoose is a modelling library for mongoDB. Allows us to make modelling and schemas more easily

const connectDB = (url) => {
    mongoose.set('strictQuery', true)
    mongoose.connect(url)
        .then(()=> console.log('MongoDB Connected'))
        .catch((error)=> console.log(error))
}

export default connectDB