let colors=['Red','Green','Blue']

// let color1=colors[0]
// let color2=colors[1]
// let color3=colors[2]

// console.log(`Color1:${color1}`)
// console.log(`Color2:${color2}`)
// console.log(`Color3:${color3}`)

//Destructuring Arrays

let [,color2,color3]=colors

//console.log(`Color1:${color1}`)
console.log(`Color2:${color2}`)
console.log(`Color3:${color3}`)

//----------------------Destructuring Object ------------------------

let student={
    sid:1,
    sname:'Rajeev',
    scity:'Bangalore',
    semail:'raj.rajeev2244@gmail.com'
}

// let sid=student.sid
// let sname=student.sname
// let scity=student.scity

let {sid,sname,scity,semail}=student


console.log(`Student ID :${sid}`)
console.log(`Student Name :${sname}`)
console.log(`Student City :${scity}`)
console.log(`Student Email :${semail}`)
















