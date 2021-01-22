const express = require('express');
const app = express();
const path = require('path');
const hbs = require("hbs");
const port = process.env.PORT || 4000;

// console.log(path.join(__dirname,"../public"));
// static path
// const pathJoin = path.join(__dirname,"../public");
const tempEngn = path.join(__dirname,"../TemplatePartials/views") //template engine 
const partialsPath = path.join(__dirname,"../TemplatePartials/partials"); 

// template engine set
app.set("view engine", "hbs");
app.set("views",tempEngn);
app.use(express.static(tempEngn));

// use static path in express.static  

// app.use(express.static(pathJoin));

// partials
hbs.registerPartials(partialsPath);
 


app.get("",(req,res)=>{
    res.render("index");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/about",(req,res)=>{
    res.render("about");
});



app.get("*",(req,res)=>{
    res.render("error");
});

app.listen(port,()=>{
    console.log("starting the server...");
})