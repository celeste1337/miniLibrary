//
//
// this will be a file that shows how this library COULD be used
//

import { mini } from './library.js';

//
// example 1
//

let sampleArrayOfNames = ["Celeste&#","Owen/!&","Hobbes%","Maggie$"];

//normally id do this to get rid of all the extra characters
for(let i = 0; i < sampleArrayOfNames.length; i++) {
    sampleArrayOfNames[i] = replaceStr(sampleArrayOfNames[i])
}

function replaceStr(str) {
    //regex cuz im fancy like that hehe
    str = str.replace(/[^a-zA-Z0-9 ]/g, "")
    return str
}

//but this sucks! its so much code!!!!!!!!!
