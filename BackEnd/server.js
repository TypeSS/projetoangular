const express=require('express');
const app = express();
const http=require('http');
const sql=require('mysql2');
const cors = require('cors')
const server = http.createServer(app);
const db = sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tasks',
    port:3306
});

db.connect(err=>{
    if(err){
    console.log("Erro:",err);}
    else{
    console.log("sucesso feita");
    }
});

server.listen(3000,()=> {
    console.log("asd");
});

app.get('/task',(req,res) => {
    let qry = 'Select * from task where id=$(getId)'

    db.query(qry,(err,result) => {
        if(err){console.log("err");}
        if(result.length>0){
            res.send({
                message:'get all data',
                data: result
            })
        }
    })
})

app.get('/task:id',(req,res) => {
    let getId = req.params.id;
    let qry = `Select * from task where id=${getId}`;
    db.query(qry,(err,result)=>{
        if(err){console.log(err,'err');}
        if(result.length>0){
            res.send({
                message:"get single data",
                data:result
            })
        }
    })
})

app.delete('/task:id',(req,res) => {
    let getId = req.params.id
    let qry = `DELETE FROM task where id=${getId}`;
    db.query(qry,(err,result)=>{
        if(err){console.log(err,'err');}
        if(result.length>0){
            res.send({
                message:"delete single data",
                data:result
            })
        }
    })
})