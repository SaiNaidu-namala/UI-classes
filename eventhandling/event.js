var doaddition=()=>{
var a1=document.querySelector("#fval").value;
a1=parseInt(a1);
var a2=document.querySelector("#svalue").value;
a2=parseInt(a2);
var result=a1+a2;
document.querySelector("#res").innerHTML=result;

}
var dosub=()=>{
    var a1=document.querySelector("#fval").value;
    a1=parseInt(a1);
    var a2=document.querySelector("#svalue").value;
    a2=parseInt(a2);
    var result=a1-a2;
    document.querySelector("#res").innerHTML=result;
}

