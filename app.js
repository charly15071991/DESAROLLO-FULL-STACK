const express = require('express')
const cors = require("cors")
const morgan = require("morgan")  
const {sequelize} = require("./database/base");
require("./src/models/modelo")



const app = express();
exports.app = app


// middlewares//
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : false}));




// rutas//
app.use("/", require("./routers/router"));
app.set( 'views',__dirname + "/src/views")
app.set("view engine","ejs"); 
app.use(express.static("public"))



//configuracion inicial//
app.listen(4000,()=> {
  sequelize.sync({force:false})
.then(() => 
       console.log('Connection has been established successfully.'))
  .catch(err =>console.log(err))
})
