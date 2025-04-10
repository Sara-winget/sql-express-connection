// const mysql = require('mysql2')

// const pool=mysql.createPool({
//     host: '127.0.0.1',
//     user:'root',
//     password:'Shree_16',
//     database:'testdb'
// }).promise()



// async function fetchData() {
//     try {
//         const [result] = await pool.query('SELECT * from main')
//         console.log(result)  
//     } catch (err) {
//         console.error('Error fetching data:', err);
//     }
// }

// fetchData();

// async function getData(id){
//     try{
//         const [rows]=await pool.query(`SELECT * from main where id = ?`,[id])
//         console.log(rows)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// async function create(id,name,age){
//     const [res]= await pool.query(`insert into main(id,name,age)values(?,?,?)`,[id,name,age])
//     getData(id);
 
// }

// create(9,'pcd',25)
// module.exports=pool
const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('testdb', 'root', 'Shree_16', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false, // optional: disable SQL logs in console
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
