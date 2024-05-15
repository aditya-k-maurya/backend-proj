import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// middleware to get json data and we can also set the limit
app.use(express.json({ limit: "16kb" }))

// we can also get data from the url so to handle than we use middleware name urlencoded
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// storing assets like images
app.use(express.static("public"))

// to set data in browser securely
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes'

//routes declaration
app.use("/api/v1/users", userRouter)

export  {app}