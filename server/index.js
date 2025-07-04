import express from 'express'
import cors from 'cors'
import connectToDatabase from './db/db.js'
import postRoutes from './routes/posts.js'
import categoryRoutes from './routes/categories.js'
import errorHandler from './middleware/errorHandler.js'
import authRoutes from './routes/auth.js';

connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use(errorHandler);
app.use('/api/auth', authRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`) 
})