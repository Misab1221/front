var email = document.forms['form']['usrid'];
var password = document.forms['form']['pwd'];

var username = document.forms['form']['uname'];
var e_mail = document.forms['form']['e_mail'];
var spwd = document.forms['form']['spwd'];
var cpwd = document.forms['form']['cpwd'];








var mailerror= document.getElementById('emailerror');
var pswderror= document.getElementById('pwderror');

var usererror= document.getElementById('usererror');
var e_mailerror= document.getElementById('e_mailerror');
var pwd_error= document.getElementById('pwd_error');
var cpwderror= document.getElementById('cpwderror');



function validated()
{
    if (email.value.length < 5) {
        email.style.border = "1px solid red";
        alert("Enter the valid e-mail");  
        email.style.display="block";
        email.focus();
        return false;
        
    } 
    if (password.value.length < 4) {
        password.style.border = "1px solid red";
        alert("Enter valid password");  
        password.style.display="block";
        password.focus();
        return false;
        
    } 
        
    }
    function svalidated()
    {
        if (username.value.length < 5) {
            username.style.border = "1px solid red";
            alert("Name can't be blank");  
            return false;   
    }
    if (e_mail.value.length < 5) {
        e_mail.style.border = "1px solid red";
        alert("e-mail can't be blank");  
        return false; 
    }  
    if (spwd.value.length < 5) {
        spwd.style.border = "1px solid red";
        alert("Password can't be blank");  
        return false; 
    }
    if (cpwd.value.length < 5) {
        cpwd.style.border = "1px solid red";
        alert("Confirm Your Paswsword"); 
        return false; 
    }
}
