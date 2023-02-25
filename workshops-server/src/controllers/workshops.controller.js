const workshops = require( '../db/data/workshops.json' );

const getWorkshops = ( req, res ) => {
    res.json({
        success: true,
        data: workshops
    });
};

module.exports = {
    getWorkshops
};