function receivesAFunction(callback) {
    callback()
}

receivesAFunction()
/////////////////////

function returnsANamedFunction() {
    return function namedFunction() {}
    //  let namedFunction = function () {
    // }
    // return namedFunction
} 

returnsANamedFunction()

//////////

function returnsAnAnonymousFunction() {
    return function() {}
}