const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', ()=>{
    var db = {
        saveUser:expect.createSpy(),
    };

    app.__set__('db',db);


    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Ming','27');
        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Ming',"27");
    });

    it('Should call save user with user object', () => {
        var email = `varesc@gmail.com`;
        var password = 'asdf1234';
        // expect(spy).toHaveBeenCalled();
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });




});