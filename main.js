//FIBONACCI SERIES

var n=prompt("enter n value")
let a=0,b=1;
for(i=1;i<=n;i++)
{
document.write(a);
c=a+b;
a=b;
b=c;
document.write("<br>");
}