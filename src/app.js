const express=require("express");
const path=require("path");
const geocode=require("./utils/geocode");
const forcast=require("./utils/forcast");

const app=express();

const port=process.env.PORT || 3000;
// console.log(path.join(__dirname,"../public"))
const publicDirectoryPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates");

app.set("view engine","ejs");
app.set('views',templatePath)
app.use(express.static(publicDirectoryPath));

app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    console.log(req.query.address)
    if(!req.query.address){
        return res.send({"error":"you must provide address!"})
    }
    geocode(req.query.address,(err,{longitude,latitude,location}={})=>{
        if(err){
            return res.send({err})
        }
        forcast(latitude,longitude,(err,data)=>{
            if(err){
                return res.send({err})
            }
            res.send(JSON.stringify({
                forcast:data,
                location,
                address:req.query.address

            }))
        })
    })
    // res.render("weather")    
})

app.get("/help",(req,res)=>{
    res.send("help page")
})

app.get("/help/*",(req,res)=>{
    res.send("help articale not found")
})

app.get("*",(req,res)=>{
    res.send("404 page")
})



app.listen(port,()=>{
    console.log(`listining to port ${port}`)
})