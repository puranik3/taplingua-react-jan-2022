// const workshops = require( '../db/data/workshops.json' );
const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'Workshop' );

const getWorkshops = async ( req, res ) => {
    try {
        const workshops = await Workshop.find();
        res.json({
            success: true,
            data: workshops
        });
    } catch( error ) {
        res.status( 500 ).json({
            success: false,
            message: error.message
        });
    }
};

const postWorkshop = async ( req, res ) => {
    const data = req.body;

    try {
        const addedWorkshop = await Workshop.create( data );
        res.json({
            success: true,
            // data: data
            data: addedWorkshop
        });
    } catch( error ) {
        // error.name is used to know what kind of error occured
        // ideally status code should be 400 for BAD request (incorrect format of data etc.)
        res.status( 500 ).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    getWorkshops,
    postWorkshop
};