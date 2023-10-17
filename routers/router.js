const {Router} = require( "express" )
const router = Router()

const {
       allinone,
       createtabla,
       deletetabla,
       updatetabla,
       newtabla,
       newupdate,
      } = require("../src/controllers/crudo");

      
router.get ("/",allinone);
router.get ("/create",newtabla);
router.get ("/update/:id",newupdate);
router.get ("/delete/:id",deletetabla);


router.post ("/",createtabla);
router.post ("/update",updatetabla);




module.exports = router;









