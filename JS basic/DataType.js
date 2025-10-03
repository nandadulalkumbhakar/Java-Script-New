let a = 15;
let  b = 'Nanda';
let c = "Koushik";
let d = true;
/*console.log(typeof (a));//number
console.log(typeof (b));//string
console.log(typeof (c));//string
console.log(typeof (d));//boolean
console.log(typeof (null));//object
console.log(typeof (undefined));//undefine
console.log(typeof(Symbol));//function*/

/*
Data Type in JS: - i) primitive ii) non primitive or reference

    i)primitive

    1) Number=> Range(-2^52-1 to 2^53-1)
    2) BigInt=>12345678901234567890123456789n
    3) string
    4) Boolean
    5) null=>standalone value 
    6) undefined 
    7) symbol => unique

    ii)non primitive 

    1)Array
    2)object
    3)function
*/

//non primitive

let arr = [1, 2, 3, 4, 5];// Array in js
console.log(arr);
for (let i = 0; i < arr.length;i++)
{
    console.log(arr[i]);
    
}

//object
let obj = {
    name: "Nanda",
    roll: 122,
    age: 23
};

function myfunction() 
{
    console.log("Hello World"); 
    
}
myfunction();
