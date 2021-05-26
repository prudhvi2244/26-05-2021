function displayDateTime()
{
    var dt=new Date()
    document.getElementById('dt').innerHTML=dt
}

function handlePrint()
{
    window.print()
}

function handleOnLoad()
{
    alert('Dear Citizens , Please Wear Mask ,Wash Your Hands Regularly')
}

function handleOneResize()
{
    alert('Hey ,You Resized the window!')
}