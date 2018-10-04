var a;
tyepof a;       //undefined

a = 'hello world';
typeof a;   //string

a = 42;
typeof a;   //number

a = true;
typeof a;   //boolean

a = undefined;
typeof a;   //undefined

a = {b: 'c'};
typeof a;   //object


//objects

var obj = {
    a:'hello world',
    b:'42',
    c: true
};


obj.a;  //"hello world"
obj.b;  //42
obj.c;  //true

obj["a"];   //"hello world"
obj["b"];   //42
obj["c"];   //true


//objects 2

var obj = {
    a:"hello world",
    b: 42
};

var b = "a";

obj[b];     //"hello world"
obj["b"];   // 42

//arrays
var arr = [
    "hello world",
    42,
    true
];

arr[0];     //hello world
arr[1];     //42
arr[2];     //true
arr.length; //3

typeof arr;     //"object"

//functions

function foo(){
    return 42;
}

foo.bar = "hello world";

typeof foo;     //function
typeof foo();   //number
typeof foo.bar  //string


//built-in type methods

var a = "hello world";
var b = 3.14159;

a.length;   //11
a.toUpperCase();    //HELLO WORLD
b.tofixed(4);   //3.1416


//explicit coercion

var a = "42";

var b = Number( a );

a;  //"42"
b;  //42 the number

//implicit coercion

var a = "42";
var b = a * 1; //"42" implicitly coerced to 42 here

a;  //"42"
b;  //42 the number


//equality
var a = "42";
var b = 42;

a == b;     //true
a === b;    //false


//equality 2

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c;     //true
b == c;     //true
a == b;     //flase


//inequality    (no strict inequality)

var a = 41;
var b = "42";
var c = "43";

a < b;  //true
b < c   //true


//inequality 2

var a = 42;
var b = "foo";

a < b;  //false
a > b;  //false
a == b;  //false


//function scopes
//hoisting

var a = 2;

foo();      //works because 'foo();
            //declaration is hoisted


function foo() {
    a = 3;

    console.log( a );   //3

    var a;      //declaration is hoisted
                    //to the top of foo()
}

console.log(a);     //2


//nested scopes

function foo() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz(){
            var c = 3;

            console.log(a,b,c); //1,2,3
        }

        baz();
        console.log(a,b); //1,2
    }
    bar();
    console.log(a);         //1
}
foo();



//bad practice, always declare var
function foo() {
    a = 1; //a not formally declared
}

foo();
a;      //1


//let
function foo() {
    var a = 1;
    
    if(a >= 1){
        let b = 2;
        
        while(b < 5){
            let c = b * 2;
            b++;

            console.log(a + c);
        }
    }
}

foo();
//5, 7 9



//conditionals
if (a == 2){
    // do something
}
else if (a==10){
    //do another thing
}
else if(a == 42){
    //do yet another thing
}
else {
    //fallback here
}


//another option (switch statement)

switch(a){
    case 2:
        //do something
        break;
    case 10:
        //so another thing
        break;
    case 42:
        //do yet another thing
        break;
    default:
        //fallback here
}

switch(a){
    case2:
    case10:
        //some cool stuff   ( a is either 2 or 10, it will execute the "some cool stuff" code statements.)
        break;
    case 42:
        //other stuff
        break;
    default:    
        //fallback
}


//ternary operator(consise single if..else statement)

var a = 42;

var b = (a > 41) ? "hello": "world";

// similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }



//strict mode (use in all your programs)

function foo(){
    "use strict";

    //this code is strict mode

    function bar(){
            //this code is strict mode
    }
}
//this code is not in strict mode



//strict mode 2
"use strict";

function foo(){
    //this code is strict mode

    function bar(){
        //this code is strict mode
    }
}
//this code is in strict mode


//strict mode 3

function foo(){
    "use strict";   //turn on strict mode
    a = 1;  //var missing, referenceError
}

foo();


//functions as values

var foo = function(){
    //...
}

var x = function bar(){
    //..
}



//immediately invoked function expressions

(function IIFE(){
    console.log( "Hello!" );
})();

//hello!



function foo(){ ..}

//foo function reference expression,
//then () executes it

foo();

//IIFE function expression,
//then () executes it
(function IIFE(){..})();



//IIFE 2

var a = 42;

(function IIFE(){
    var a = 10;
    console.log(a);     //10
})();

console.log(a);     //42



var x = (function IIFE(){
	return 42;
})();

x;	// 42




//closure ( way to "remember" and continue to access a function's scope (its variables) even once the function has finished running.)


function makeAdder(x) {
    //parameter 'x' is an inner variable

    //inner function add() uses x, so
    // it has a closure over it
    function add(y) {
        return y + x;
    };

    return add;
}



//plusOne gets a referenence to the inner add(..)
//function with closure over the x parameter of 
//the outer makeAdder(..)

var plusOne = makeAdder(1);

//plusTen gets a reference to the inner add(..)
//function with closure over the x paramter of
//the outer makeAdder(..)
var plustTen = makeAdder(10);

plusOne(3);     //1 + 3 = 4
plusOne(41);    //1 + 41 = 42

plustTen(13);   //10 +13 = 23





//Modules

function User() {
    var username, password;

    function doLogin(user, pw){
        username = user;
        password = pw;

        //do the rest of the login work
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

//create a user module instance
var fred = User();

fred.login("fred", "123dgfasdf12");





//This identifier (this reference usually points to an object)


function foo(){
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar:"obj1",
    foo: foo
};

var obj2 = {
    bar:"obj2"
};

//-------

foo();      //global
obj1.foo();     //obj1
foo.call(obj2);     //obj2
new foo();      //undefinened 