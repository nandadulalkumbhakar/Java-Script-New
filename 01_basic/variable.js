let studentName = "Nanda";//let:- same variable can't declare multiple time and we can modify the value of the variable and it's has access scope for local variable and block label 
console.log(studentName);
// {
//     let studentRoll = 1245;
// }
//console.log(studentRoll);// we can't access outside the block its a 'let' type variable
{
    var v = 78;
}
console.log(v);//var:- same variable can declare multiple time and we can modify the value of the variable, its a global access variable that why we can access any where ,

//console.table([studentName, studentRoll, v]);// we get output on table formate

const c = 123;//variable can't redeclare and update , a block scope variable 
//c = 234;//its a constant variable we can't change the value
console.log(c);

//alert(3 + 3);//create a pop-up-box print the output, but its use only browser not nodejs





