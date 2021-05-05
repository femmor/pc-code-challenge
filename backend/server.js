import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import movieRoutes from "./routes/movies.js"

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

dotenv.config()

// Routes
app.use('/movies', movieRoutes)

// Greeting Route
app.get('/', (req, res) => {
  res.send('Welcome to the PC Code Challenge API')
})

const CONNECTION_URL = process.env.MONGO_URI
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)