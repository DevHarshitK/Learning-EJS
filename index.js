const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname,"/public/css")));

app.use(express.static(path.join(__dirname,"/public/js")));

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceVal})
});

app.get("/ig/:username",(req,res)=>{
    try {
    let {username}=req.params;
    const Alldata = require(path.join(__dirname,"data.json"));
    const data = Alldata[username];
    if(!data){
        res.send("No data found");
    }
    else{
        res.render("igpage.ejs",{data});
    }
    }
    catch(error){
        console.log(error);
    }
});