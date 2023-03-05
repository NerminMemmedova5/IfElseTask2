var time=8;
var money = 1;
var sum;

if(time>=1 && time <= 3)
{
    sum = time * money;
    console.log(sum);
}
else if(time>3 && time <= 5) 
{
    sum = 3*money+((time-3)*money)-(((time-3)*money)*0.2);
    console.log(sum);
}
else if (time > 5 && time <= 8)
{
    sum = 3 * money + 2*money*0.8+ ((time - 5) * money) - (((time - 5) * money) * 0.5);
    console.log(sum);
}
else if (time >8)
{
    sum = time*money-((time*money)*0.75);
    console.log(sum);
}