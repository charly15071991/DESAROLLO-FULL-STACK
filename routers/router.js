const {Router} = require( "express" )
const router = Router()

const base = require("../database/base")

router.get("/"),(req,res) => {
    res.render ("index")
}

module.exports = router








