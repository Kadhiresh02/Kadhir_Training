function checkData(){
    let usname=document.myform.uname.value;
    let usmail=document.myform.umail.value;
    let ucontact=document.myform.contact.value;
    let ugender=document.myform.gender.value;
    let pass=document.myform.pass.value;
    if(!usname.trim().match("^[a-zA-Z ]{3,15}$"))
    {
        window.alert("Enter minimum of 3 and maximum of 15 characters!");
        document.getElementById("uname").focus();
        return false;
    }
    if(!usmail.trim().match("^[a-zA-Z0-9 ]+@[a-zA-Z]+.[a-zA-Z]{2,}$"))
    {
        window.alert("Enter Valid email!");
        document.getElementById("umail").focus();
        return false;
    }
    if(!ucontact.match("^[0-9]{10,10}$"))
    {
        window.alert("Enter correct contact number!");
        document.getElementById("contact").focus();
        return false;
    }
    if(!pass.match("^[a-zA-Z0-9@#$%^&*!<>?:|\/~]{8,}$"))
    {
        window.alert("Enter correct Password!");
        document.getElementById("pass").focus();
        return false;
    }
    if((gender[0].checked==false)&&(gender[1].checked==false)){
        window.alert("Choose Gender!");
        return false;
    }
}