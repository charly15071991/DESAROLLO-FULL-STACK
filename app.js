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

app.use(express.urlencoded({extended : false}));


app.use(express.static("public"))

app.set("view engine","ejs"); 






// rutas//
app.use(require("./routers/router"))
app.set( 'views',__dirname + "/src/views")




//configuracion inicial//
app.listen(4000,()=> {
  sequelize.authenticate()
.then(() => 
       console.log('Connection has been established successfully.'))
  .catch(err =>console.log(err))
})


app.get("/",(req,res) => {
  res.render("index");
  })



