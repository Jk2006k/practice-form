const express  = require('express')
const connectDB = require('./config/db')
const app = express()
const path = require('path')
const PORT = 3000
const userRouter=require('./routes/UserRoutes')
const cors = require('cors');




app.use(cors());

app.use(express.json())
app.use("/api",userRouter)


app.get('/',  (req, res) =>{
    try {
        res.send("Hello world")
    } catch (error) {
        res.status(500).send("Server error");
    }
});

app.listen(PORT, async ()=>{
    
    try {
        await connectDB();
        console.log(`Server is Running at ${PORT}`)
    } catch (error) {
        console.log("Server error", error);
        res.status(500).send("Server error");
    }
})


