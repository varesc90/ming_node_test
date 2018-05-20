const utils = require('./utils');


it(`should add two numbers`,()=>{
    var res = utils.add(33,7);
    if (res != 40){
        throw new Error(`Expect 40 , the return value is ${res}`);
    }

});



it(`should square a numbers`,()=>{
    var res = utils.square(2);
    if (res != 4){
        throw new Error(`Expect 4 , the return value is ${res}`);
    }

});