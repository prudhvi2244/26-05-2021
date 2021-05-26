var eid=1;
var ename='Prudhvi';
var ecity='Bangalore';
var esalary=180000.4141;
var marital_status=true
var mobiles=[9898981234,898989123];

console.log(typeof(eid))
console.log(typeof(ename))
console.log(typeof(ecity))
console.log(typeof(esalary))
console.log(typeof(marital_status))
console.log(typeof(mobiles))

console.log('Employee ID :'+eid)
console.log("Employee Name :"+ename)
console.log("Employee City :"+ecity)
console.log("Employee Salary :"+esalary)
console.log("Employee Married? :"+marital_status)
console.log("Employee Mobile Numbers :"+mobiles)

console.log('Array Size is :',mobiles.length)

console.log('Processing Mobile Numbers using Normal For Loop .............')
for(var i=0;i<mobiles.length;i++)
{
    console.log(mobiles[i])
}

console.log('Processing Mobile Numbers using  For .... in Loop .............')
for(var mobile in mobiles)
{
    console.log(mobiles[mobile])
}

console.log('Processing Mobile Numbers using  For .... of Loop .............')
for(var mobile of mobiles)
{
    console.log(mobile)
}

console.log('Processing Mobile Numbers using  For-Each function of Arrays .............')
mobiles.forEach(function(mobile)
{
    console.log(mobile)
})

var numbers=[10,3,2,1,6]
console.log(numbers)

numbers.sort(function(a,b)
{
    if(a<b)
    {
        return 1;
    }
    else if(a>b)
    {
        return -1;
    }
    else
    {
        return 0;
    }
})

console.log(numbers)

numbers.filter(function(number)
{
    if(number==6)
    {
        console.log(number)
    }
})
