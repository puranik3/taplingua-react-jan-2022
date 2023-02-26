const express = require( 'express' );
const {
    getWorkshops,
    postWorkshop,
    patchWorkshop,
    deleteWorkshop
} = require( '../controllers/workshops.controller' );

const router = express.Router();

router.get( '/workshops', getWorkshops );
router.post( '/workshops', postWorkshop );
router.patch( '/workshops/:id', patchWorkshop );
router.delete( '/workshops/:id', deleteWorkshop );

module.exports = router;