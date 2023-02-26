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
};

const patchWorkshop = async ( req, res ) => {
    const data = req.body;
    const id = req.params.id;

    try {
        const updatedWorkshop = await Workshop.findByIdAndUpdate( id, data, {
            new: true, // return the new document, and not the old one
            runValidators: true // do validations on update
        } )
        res.json({
            success: true,
            // data: data
            data: updatedWorkshop
        });
    } catch( error ) {
        // error.name is used to know what kind of error occured
        // ideally status code should be 400 for BAD request (incorrect format of data etc.)
        res.status( 500 ).json({
            success: false,
            message: error.message
        });
    }
};

const deleteWorkshop = async () => {
    // delete a document - Workshop.findByIdAndDelete
    // https://mongoosejs.com/docs/api/model.html#model_Model-findOneAndDelete
};

module.exports = {
    getWorkshops,
    postWorkshop,
    patchWorkshop,
    deleteWorkshop
};