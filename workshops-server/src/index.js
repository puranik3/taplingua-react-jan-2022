const express = require( 'express' );
require( './db/init.js' ); // the file executes and connects to the DB
const workshopsRouter = require( './routes/workshops.route' );

const app = express();

app.use( workshopsRouter );

app.listen( 3000, () => {
    console.log( 'check http://localhost:3000' );
});