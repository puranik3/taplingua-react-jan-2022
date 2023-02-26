// const workshops = require( '../db/data/workshops.json' );
const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'Workshop' );

const getWorkshops = async ( req, res ) => {
    // res.json({
    //     success: true,
    //     data: workshops
    // });

    const workshops = await Workshop.find();
    res.json({
        success: true,
        data: workshops
    });
};

const postWorkshop = ( req, res ) => {

};

module.exports = {
    getWorkshops,
    postWorkshop
};