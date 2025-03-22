import express from "express";
const app = express()
const PORT = 3000;

import flashCardRoutes from "./src/routes/flashcard-routes.js"
app.use('/v1/flashcard', flashCardRoutes) 

// HEALTH CHECK
app.get('/v1/ping', (req, res) => {
    console.log("Hello world!")
    res.status(200).json({message: "Ping successful"});
})

// RUN SERVER
app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server us successfully running, and app is listening on port " + PORT);
    } else {
        console.log("Error occurred, server can't start");
    }
})

