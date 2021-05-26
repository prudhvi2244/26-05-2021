var employee={
    eid:1,
    ename:"Prudhvi",
    isSenior:true,
    mobiles:[9090901234,7878781234,899912345],
    address:{
        streetno:'44/44',
        city:'Bangalore',
        state:'Karnataka'
    }
}

console.log(typeof(employee))
console.log('Diaplaying Employee Data')
console.log(employee)
console.log('Employee ID:'+employee.eid)
console.log('Employee Name:'+employee.ename)
console.log('Senior Employee?:'+employee.isSenior)
console.log('Employee Mobiles:'+employee.mobiles[1])
console.log('Employee Address : StreetNo:'+employee.address.streetno)
console.log('Employee Address : City:'+employee.address.city)
console.log('Employee Address : State:'+employee.address.state)