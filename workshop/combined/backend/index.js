const express = require('express');
const app = express();
const port = 4545;
const m1 = require("./controller/playerdb");
app.use(express.json());
app.use(express.urlencoded({extend:true}));


app.get('/',(req,res)=>{
    res.send("welcome to the api");
});

app.get("/e1", m1.funct1);
app.post("/test3",m1.funct3);
app.get("/test4",m1.funct4);


app.listen(port,() =>{
    console.log(`server is running in port ${port}`);
});