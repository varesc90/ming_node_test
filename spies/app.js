var db = require('./db');


module.exports.handleSignup = (email,password) => {
    //check email exist
    //save user to database
    db.saveUser({email, password});
    //send welcome message
}