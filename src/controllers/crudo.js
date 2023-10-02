const control= {};
control.list =( req,res) => {
    res.get ("hola desde el control")

}

control.dato =(req,res) =>{
req.getconnection ((err,conn) =>{
    conn.query ("in")
})

}




module.exports = control