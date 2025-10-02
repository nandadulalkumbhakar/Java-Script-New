// 1)primitive 2)non-primitive

// primitive: -
// =================================

let a=10;
let b=a;//only value copy and store into the b, not the reference, if i modify the value of b then its not effect to a
b=15;
    console.log(a);
    console.log(b);

//non primitive
//==========================


let obj = {
    name:"Nanda",
    roll:123
}
let obj1 = obj;//here obj and obj1 both are denoted same reference, that why if i modify any object value then its effect everywhere 
obj1.name = "Dulal";

console.log(obj.name);
console.log(obj1.name);


