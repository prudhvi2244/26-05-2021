var employees = [
  {
    eid: 1,
    ename: "Prudhvi",
    ecity: "Bangalore",
  },
  {
    eid: 2,
    ename: "Rajeev",
    ecity: "Bangalore",
  },
  {
    eid: 3,
    ename: "Praveen",
    ecity: "Chennai",
  },
  {
    eid: 4,
    ename: "Kiran",
    ecity: "Chennai",
  }

];

console.log(Array.isArray(employees));
console.log(employees[0]);
console.log(employees);

console.log('Processing Array of Employee Objects')

for (var  employee of employees) {
    console.log('Employee ID :',employee.eid)
    console.log('Employee Name :',employee.ename)
    console.log('Employee City :',employee.ecity)
}

console.log('Processing Array of Employee Objects using forEach() ....')

employees.forEach(function(employee)
{
    if(employee.ecity=='Chennai')
    {
    console.log('Employee ID :',employee.eid)
    console.log('Employee Name :',employee.ename)
    console.log('Employee City :',employee.ecity)
    }
})

