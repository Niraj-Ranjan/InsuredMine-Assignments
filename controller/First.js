var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://niraj:qwerty123@cluster0-wawei.mongodb.net/test?retryWrites=true', {
    useMongoClient: true
});
require("../collection/Agent");

var app = express();
app.use(session({
    cookie: {
        maxAge: 60000
    },
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));