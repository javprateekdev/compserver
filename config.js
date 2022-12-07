const mysql = require("mysql");
const con= mysql.createConnection({
    host: "housethat.in",
    user: "u406919292_tool",
    password: "Abcd@321",
    database: "u406919292_compare",
});

con.connect((err)=>{
    if(err)
    {
        console.warn("error in connection")
    }
});

module.exports =con;