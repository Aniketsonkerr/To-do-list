import express from "express";
import bodyParser from "body-parser";
const app = express();
const port =3000;
var newTask =""
app.use(bodyParser.urlencoded({extended:true}));

function newTask(){
  console.log(req.body);
  newTask = req.body["task"]
  next();
}

app.use(newTask);

app.post('/submit', (req,res)=>{
  console.log(req.body);
});
app.get("/",(req, res) =>{
  
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
const day = weekday[d.getDay()];
    res.render("index.ejs",  {todaysDay: day});
});
app.get("/today",(req,res) =>{
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const l = new Date();
let date = l.getDate();

const d = new Date();
const day = weekday[d.getDay()];
    res.render("today.ejs",  {todaysDay: day, todaysDate: date})
  })
  app.get("/work",(req,res) =>{
    res.render("work.ejs")
  })

app.post("/submit",(req,res) =>{
    
})
app.listen(port, () =>{

console.log(`server running on port ${port}`);

});