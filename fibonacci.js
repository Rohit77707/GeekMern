var num1=0,num2=1;sum=0;
var n=prompt("Enter the number");
n=parseInt(n);
if((n==num1)||(n==num2))
{
    alert(n);
}
else
{
    sum=num1+num2;
}
for(var i=3;i<=n;i++)
{
num1=num2;
num2=sum;
sum=num1+num2;
}
alert(num2);