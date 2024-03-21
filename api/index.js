import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(
    () => { console.log('mongoDb is connected')
}).catch(err =>{
    console.log(err)
})

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on port ${PORT}!!`)
    }
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)