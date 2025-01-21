

function checkData()
{
    let uname=document.myform.fname.value;
    let uedu=document.myform.edu;
    let regName="^[a-zA-Z ]{3,20}$";
    if(uname.trim()==="")
    {
        window.alert("Full Name Required");
        document.getElementById("fname").focus();
        return false;
    }


    if(!uname.trim().match(regName))
    {
        window.alert("Fullname must contain only character min-3 and max-20");
        document.getElementById("fname").focus();
        return false;
    }
     
}