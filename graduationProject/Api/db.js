import mysql from 'mysql';


export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  pasword: "sifan010908",
  database: "epidemicStystem"
})