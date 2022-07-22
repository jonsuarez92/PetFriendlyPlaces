require('dotenv').config();
const express = require('express');
const mogoose = require('mongoose')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const { apikeys } = require('googleapis/build/src/apis/apikeys');
require('./config/database');


const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//api from 


// Put API routes here, before the "catch all" route
app.use('/user', require('./routes/api/users'))



// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`I hear you backend ${port}`)
})