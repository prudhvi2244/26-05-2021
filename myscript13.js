class Employee
{
    constructor()
    {
        console.log('Welcome To Employee Class Constructor')
    }
    
    displayEmployeeDetails()
    {
        let msg='displaying employee details'
        console.log(msg)
    }

    displayEmployeeDetails(city)
    {
        let msg=`displaying employee details ${city}`
        console.log(msg)
    }

    static displayEmployeeNames()
    {
        let enames=['Raj','Rajeev','Prudhvi','Praveen']
        console.log(`Displaying Employee Names : ${enames}`)
    }

}

let e1=new Employee() //e1 is a variable refering Employee Object
let e2=new Employee() //e2 is a variable refering Employee Object
let e3=new Employee() //e3 is a variable refering Employee Object
console.log(typeof(e1))

e1.displayEmployeeDetails('Bangalore')
e1.displayEmployeeDetails()
Employee.displayEmployeeNames()

