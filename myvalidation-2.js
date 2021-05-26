var form=document.querySelector("form")
form.addEventListener("submit",function(event)
{
    event.preventDefault()
    var username=form.elements.username.value
    var password=form.elements.password.value
    var cpassword=form.elements.cpassword.value
    var city=form.elements.city.value
    var gender=form.elements.gender.value

    if(username=='')
    {
        document.getElementById('error').innerHTML='username is required'
        document.getElementById('username').focus();
    }
    else if(password=='')
    {
        document.getElementById('error').innerHTML='password is required'
        document.getElementById('password').focus();
    }
    else if(cpassword=='')
    {
        document.getElementById('error').innerHTML='confirm password is required'
        document.getElementById('cpassword').focus();
    }
    else if(cpassword!=password)
    {
        document.getElementById('error').innerHTML='confirm password should be same as password'
        document.getElementById('cpassword').focus();
    }
    else if(city=='')
    {
        document.getElementById('error').innerHTML='city is required'
        document.getElementById('city').focus();
    }
    else if(gender=='')
    {
        document.getElementById('error').innerHTML='gender is required'
    }
    else
    {
        document.getElementById('error').innerHTML='' 
    }


})