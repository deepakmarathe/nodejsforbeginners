
// Functions are the first class citizens. 
//They can be passed around just like variables. 

// define a function
function sayHi(){
    console.log('hi')
}

// call the function 
sayHi()

// define another function 
var sayBye = function(){
    console.log('bye')
};

// call that function 
sayBye();

// define a function which accepts a function and calls it. 
function callFunction(fun){
    fun();
}

// call the function which would call your function 
callFunction(sayHi);