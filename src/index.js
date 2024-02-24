// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

connectDB()




/*

// another way to handle database directly into the database

 (async () => {
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error", (error) => {
       console.log("ERROR: ", error);
       throw error
     })
     app.listen(process.env.PORT, () => {
       console.log(`App is listening on port ${process.env.PORT}`)
     })
   }
   catch (error) {
     console.error("ERROR: ", error)
     throw error
   }
})()

*/