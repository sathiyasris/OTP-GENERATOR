var otp;
var res;
function handlegenerate()
{
    otp=Math.random()*10000;
    res=Math.floor(otp);
    document.getElementById("otpnum").innerHTML=res;
}
function handlesubmit()
{
    var inputotp=document.getElementById("otpinput").value;
    if(inputotp==res)
    {
        alert("otp verified successfully")
    }
    else{
        alert("enter a valid otp")
    }
}
function handlerefresh()
{
    location.reload();
}