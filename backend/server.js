import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"

import connectToMongo from "./db/connect.js"

const PORT = process.env.PORT || 3000
const app = express()

dotenv.config();

app.use(express.json()) // to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth", authRoutes)

app.listen(PORT,()=> {
    connectToMongo()
    console.log(`Server running on port ${PORT}`)
})