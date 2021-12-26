//Write a program to find nth number of geometric progression(GP).
var a=prompt("Enetr the First term of Geometric Series");
a=parseInt(a);//2
var r=prompt("Enter the common ratio");
r=parseInt(r); //2
var n=prompt("Enter the position of term");
n=parseInt(n);
var Tn=a* Math.floor(Math.pow(r, n - 1)) ;
alert(Tn);