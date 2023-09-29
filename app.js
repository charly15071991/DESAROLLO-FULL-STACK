const express = require('express')
const cors = require("cors")
const morgan = require("morgan")  
const {sequelize} = require("./database/base");



const app = express();
exports.app = app

// middlewares//
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// rutas//
app.use(require("./routers/router"))



//configuracion inicial//
app.listen(4000,()=>{

  sequelize.authenticate();
    console.log("base de dato corriendo");
});

app.set("view engine","ejs"); 
app.set ("view",__dirname + "view"); 
app.get("/",(req,res) => {
res.render("");
});


