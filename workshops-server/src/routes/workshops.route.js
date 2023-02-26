const express = require( 'express' );
const { getWorkshops, postWorkshop } = require( '../controllers/workshops.controller' );

const router = express.Router();

router.get( '/workshops', getWorkshops );
router.post( '/workshops', postWorkshop );

module.exports = router;