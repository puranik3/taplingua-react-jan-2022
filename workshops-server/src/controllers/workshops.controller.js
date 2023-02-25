const getWorkshops = ( req, res ) => {
    res.json({
        success: true,
        data: 'I will send an array of workshops'
    });
};

module.exports = {
    getWorkshops
};