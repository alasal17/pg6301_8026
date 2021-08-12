const express = require("express");
const path = require("path");
const  app = express();
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.use((reg, res, next) =>{
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"))
})

const server = app.listen(8080, () =>{
    console.log(`Started on port http://localhost:${server.address().port}`);
})