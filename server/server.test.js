const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;


describe('Server',()=>{

    describe('GET /',()=> {
        it('Should return Hello World',(done)=>{
            request(app)
                .get('/')
                .expect(404)
                .expect((res)=>{
                    expect(res.body).toInclude({name:`Todo App`})
                })
                .end(done);
        });
    });

    describe('GET /users',()=> {
        it('Should return Hello World',(done)=>{
            request(app)
                .get('/users')
                .expect((res)=>{
                    expect(res.body.users).toInclude({name:`Dave`,age:44})
                })
                .end(done);
        });
    });



});
