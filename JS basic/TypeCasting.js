let n = 123;
console.log(n);//number
let s = "123"
console.log(typeof (s));
let s1 = Number(s);// convert string to number
console.log(typeof s1);
let str = "1234abc";
let str1 = Number(str);//convert string to  number, but its wrong use of typecasting
console.log(str1);//NaN

let num = null;
console.log(num);//null
console.log(typeof num);//object
let num1 = Number(num);
console.log(num1);//0

let un = undefined;
let un1 = Number(un);
console.log(un);//undefined
console.log(un1); //NaN(Not a Number)its wrong use of typecasting

let t = true;
let t1 = Number(t);
console.log(t1);// true=>1 , false =>0

//1=> true, 0=>false
//""=>false, "nannan"=>true
//











