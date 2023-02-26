const mongoose = require( 'mongoose' );

const workshopSchema = new mongoose.Schema({
    // name: String
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        requireD: true
    },
    startTime: {
        hours: {
            type: Number,
            required: true,
            min: 0,
            max: 23
        },
        minutes: {
            type: Number,
            default: 0,
            min: 0,
            max: 59
        }
    },
    endTime: {
        hours: {
            type: Number,
            required: true,
            min: 0,
            max: 23
        },
        minutes: {
            type: Number,
            default: 0,
            min: 0,
            max: 59
        }
    },
    description: {
        type: String,
        required: false,
        maxLength: 2048
    },
    category: {
        type: String,
        enum: [ 'frontend', 'backend', 'database', 'language', 'data science', 'aiml' ]
    }
});

// creates a class called 'Workshop'
// a MongoDB collection called "workshops" will be created later
mongoose.model( 'Workshop', workshopSchema );