// const workshops = require( '../db/data/workshops.json' );
const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'Workshop' );

const getWorkshops = async ( req, res ) => {
    // res.json({
    //     success: true,
    //     data: workshops
    // });

    try {
        const workshops = await Workshop.find();
        res.json({
            success: true,
            data: workshops
        });
    } catch( error ) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

const postWorkshop = ( req, res ) => {
    const data = req.body;

    res.json({
        success: true,
        // data: data
        data
    });
};

module.exports = {
    getWorkshops,
    postWorkshop
};