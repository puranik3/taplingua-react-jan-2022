const express = require( 'express' );
const { getWorkshops } = require( '../controllers/workshops.controller' );

const router = express.Router();

router.get( '/workshops', getWorkshops );

module.exports = router;