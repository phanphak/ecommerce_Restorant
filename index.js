const express = require("express");
const app = express();
const dotenv = require("dotenv");

// dotenv configuration
dotenv.config();



// rest object
app.use(express.json());


//Mindoware
app.use("/api", (req, res)=>{
   res.status(200).json({message: "Respone pages!"})
})




// port server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res)=>{
    console.log(`server running PORT ${PORT}`);
})

