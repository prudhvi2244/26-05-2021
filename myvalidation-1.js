var form=document.querySelector("form")
form.addEventListener('submit',function(event)
{
    event.preventDefault()
    var username=form.elements.username.value
    var password=form.elements.password.value
    var role=form.elements.role.value

    if(username=='')
    {
       document.getElementById("error").innerHTML='username is required'
       document.getElementById('username').focus()
       
    }
    else if(password=='')
    {
         
        document.getElementById("error").innerHTML='password is required'
        document.getElementById('password').focus()
    }
    else if(role=='')
    {
         
        document.getElementById("error").innerHTML='Role is required'
        document.getElementById('role').focus()
    }

    else
    {
   
    document.getElementById("error").innerHTML=''    
    console.log('Username :',username)
    console.log('Password :',password)
    console.log('Role :',role)
    }
})