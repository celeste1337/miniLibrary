import { mini } from './library.js';

//
// A R R A Y F U N C T I O N S
//

//
// Mini.Array.Map Functionality - do something to every element in the array and provide the function you want to do!
//

//
// example 1
//

let sampleArrayOfNames = ["Celeste&#","Owen/!&","Hobbes%","Maggie$", "Tilly"];

//normally id do this to get rid of all the extra characters
// for(let i = 0; i < sampleArrayOfNames.length; i++) {
//     sampleArrayOfNames[i] = replaceStr(sampleArrayOfNames[i])
// }

// function replaceStr(str) {
//     //regex cuz im fancy like that hehe
//     str = str.replace(/[^a-zA-Z0-9 ]/g, "")
//     return str
// }

//but this sucks! its so much code!!!!!!!!! and such inefficient code too!
//so now we do it like this instead which is less code and way more reusable
//you feed it the array and the function you want it to do
let newArray = mini.array.map(sampleArrayOfNames)
    (name => name.replace(/[^a-zA-Z0-9 ]/g, ""))
console.log(newArray)

//this one just returns the elements
let newArrayAgain = mini.array.map(sampleArrayOfNames)(name => name)
console.log(newArrayAgain)

//
// example 2 - the purpose of this example is to show how flexible this arrangement is. i can feed it numbers instead of strings and still have it do this cool wacky stuff!
//

let sampleArrayOfNumbers = [1,2,3,4,5];
let numberArray = mini.array.map(sampleArrayOfNumbers)(number => number += 1)
console.log(numberArray)


//
// example 3 - now with objects >:)
//
let sampleArrayOfObjects = [{name: "celeste", hp: 100},{name:"owen", hp: 100},{name: "hobbes", hp:100},{name: "maggie", hp: 100}];
let objectArray = mini.array.map(sampleArrayOfObjects)(character => character.hp -= 10)
console.log(objectArray);


//
// Mini.Array.Filter Functionality - filter arrays based on a function you pass in!
//
let filterLength = mini.array.filter(sampleArrayOfObjects)(character => character.name.length > 5)
console.log(filterLength)


//
// Mini.Array.Separate Functionality - separates arrays based on a string!
//

//this function exists to separate one array into a nested array of two arrays [[],[]] separated by whether or not they contain the provided string
//the boolean is whether or not you want the string to be case sensitive
let testSeparate = mini.array.separateByString(sampleArrayOfNames)("o", true)
let testSeparate2 = mini.array.separateByString(sampleArrayOfNames)("o")
let testSeparate3 = mini.array.separateByString(sampleArrayOfNames)("o", false)

console.log(testSeparate)
console.log(testSeparate3)

//
// Mini.Array.Combine -  returns a combined array with no duplicates!
//
let array1 = ["foo", "bar"]
let array2 = ["hi", "bye", "bye"];
let testCombine = mini.array.combine(array1)(array2)
console.log(testCombine)


//
// D E B U G F U N C T I O N S
//

//
// mini.debug.type - returns the type!
//
console.log(mini.debug.type("hi"))
console.log(mini.debug.type(123))

//
// mini.debug.compareType - compares two types, returns true if theyre the same type
//
console.log(mini.debug.compareType("hi")("bye"))
console.log(mini.debug.compareType(123)("foo"))

//
// mini.debug.compareobjects - sort of compares two objects (not super great in js since they point to different places but this works in a pinch~)
//
let testObj = {name: "celeste", hp: 100}
let testObj2 = {name: "celeste", hp: 100}
let testObj3 = {name:"owen", dog: "maggie"}
let testResult = mini.debug.compareObjects(testObj)(testObj2)
let testResult2 = mini.debug.compareObjects(testObj2)(testObj3)
console.log(testResult, testResult2)


//that's all, folks!