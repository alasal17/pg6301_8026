const express = require("express");
const path = require("path");
const  app = express();

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.get("/api/profile", (reg, res) =>{
    const authorization = reg.header("Authorization");
    if(!authorization){
        return res.send(401);
    }
    return res.json({
        username:"The master user",
    })
})

app.use((reg, res, next) =>{
    if(reg.method == "GET" && !reg.path.startsWith("/api")){
        return res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"))
    };
        next();
}

)

const server = app.listen(8080, () =>{
    console.log(`Started on port http://localhost:${server.address().port}`);
})