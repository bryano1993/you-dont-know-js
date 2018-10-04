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

