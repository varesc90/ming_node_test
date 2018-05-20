const utils = require('./utils');
const expect = require('expect');

describe('Utils',()=>{
    describe('#add',()=>{
        it(`should add two numbers`,()=>{
            var res = utils.add(33,7);
            expect(res).toBe(40);
            expect(res).toBeA('number');


            // if (res != 40){
            //     throw new Error(`Expect 40 , the return value is ${res}`);
            // }

        });
    });
    describe('#async',()=>{
        it(`Should Async Add 2 numbers`,(done)=>{
            utils.asyncAdd(1,2,(sum)=>{
                expect(sum).toBe(3).toBeA('number');
                done();
            });

        });


        it(`Should Async Square a numbers`,(done)=>{
            utils.asyncSquare(2,(res)=>{
                expect(res).toBe(4).toBeA('number');
                done();
            });

        });
    });




    it(`should square a numbers`,()=>{
        var res = utils.square(2);
        expect(res).toBe(4).toBeA('number');

    });


    it(`should expect some values`,()=>{
        var res = utils.square(2);
        // expect(12).toNotBe(12);
        // expect({name:"ming"}).toEqual({name:"ming"});
        // expect(([1,2,3,4])).toInclude(4);
        // expect(([1,2,3,4])).toExclude(5);
        expect({
            name:"ming",
            age:26,
            hobby:"programming"
        }).toInclude({age:26});
    });



    it(`should verify that first and last name is correct`,()=>{
        var user = {firstname:'',lastname:''};
        var res = utils.setName(user,`Vares Chai`);
        expect(res).toEqual({
            firstname:"Vares",
            lastname:"Chai"
        }).toBeAn('object');
    });


//" done " needed because of the function is Asyn


});


