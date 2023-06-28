var otp=()=>{
    var otpvalue=' ';
    for(var i=0;i<5;i++){
        var randomnumber=getrandomnumber();  //calling
        otpvalue+=randomnumber;
    }
    document.querySelector(".otpcode").innerHTML=otpvalue;
}
var getrandomnumber=()=>{
    var max=10;
    var no=Math.floor(Math.random()*max);
    return no;


}