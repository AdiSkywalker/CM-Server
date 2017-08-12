const assert = require('assert');
const {VM} = require('vm2');

const challenges = require('./challenges');

function Test(config){
    const code = config.code;
    const id = config.id;

    const challenge = challenges.filter( c => c.id === id);

    console.log(challenge);


}

const x = {"code":"function Sum(){\n  return [...arguments].reduce( (s, c) => s + c , 0 );\n}","id":1};

Test(x);