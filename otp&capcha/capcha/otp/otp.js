var generateotp=()=>{
    var otpvalue=' ';
    for(var i=0;i<5;i++){
        var randomnumber=getrandomnumber();
        otpvalue+=randomnumber;
    }
    document.querySelector(".otpcodeblock").innerHTML=otpvalue;
}
    var getrandomnumber=()=>{
        var max=10;
        var randomno=Math.floor(Math.random()*max);
        return randomno;
    }
