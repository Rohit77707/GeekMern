//Write a program to find nth number of arithmetic progression(AP). 
var a=prompt("Enetr the First term of Arithmetic Series");
a=parseInt(a);
var d=prompt("Enter the common difference");
d=parseInt(d); 
var term=prompt("Enter the position of term");
term=parseInt(term);
var Tn=a+(term-1)*d;
alert(Tn); 