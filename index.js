const express=require('express')
const mysql = require('mysql2')

const port =4000
const app=express();
app.use(express.json())

app.get('/',async(req,res)=>{
    res.send("helloooooo")
})

app.listen(port,()=>{
    console.log(`app listening at port : ${port}`)
})

const sequelize = require('./db');
const User = require('./model');

async function run() {
  await sequelize.sync(); // creates table if not exists

  // Insert test data
  await User.create({id:1, name: 'Alice', age: 25 });

  // Fetch and print
  const users = await User.findAll();
  console.log(users.map(u => u.toJSON()));
}

run();
