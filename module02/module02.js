/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations.
    The resulting JavaScript should look the same as the original example when you're done. */
var firstName;
var lastName;
var fullName;
var age;
var ukCitizen;
firstName = "Rebecca";
lastName = "Smith";
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;
if (ukCitizen) {
    console.log("My name is " +
        fullName +
        ", I'm " +
        age +
        ", and I'm a citizen of the United Kingdom.");
}
else {
    console.log("My name is " +
        fullName +
        ", I'm " +
        age +
        ", and I'm not a citizen of the United Kingdom.");
}
/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables.
   Then, address any errors you find so that the result returned to a is 12. */
var x;
var y;
var a;
x = 5;
y = 7;
a = x + y;
console.log(a);
