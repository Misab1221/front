var email = document.forms['form']['usrid'];
var password = document.forms['form']['pwd'];

var username = document.forms['form']['uname'];
var e_mail = document.forms['form']['e_mail'];
var spwd = document.forms['form']['spwd'];
var cpwd = document.forms['form']['cpwd'];

var bookid = document.forms['form']['bookid'];
var bookname = document.forms['form']['bookname'];
var author = document.forms['form']['author'];
var publications = document.forms['form']['publications'];







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
        alert("Enter the valid user-id");  
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
function bookvali()
{
    if (bookid.value.length < 2) {
        bookid.style.border = "1px solid red";
        alert("Enter A valid ID");  
        return false;   
}
if (bookname.value.length < 1) {
    bookname.style.border = "1px solid red";
    alert("Enter A Valid BookName");  
    return false; 
}  
if (author.value.length < 2) {
    author.style.border = "1px solid red";
    alert("Enter A Valid Author");  r
    return false; 
}
if (publications.value.length < 2) {
    publications.style.border = "1px solid red";
    alert("Enter A valid Publications"); 
    return false; 
}
}
