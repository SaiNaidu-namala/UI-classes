var doaddition=()=>{
    var a1=document.querySelector("#fval").value
    a1=parseInt(a1);;
    var a2=document.querySelector("#sval").value;
    a2=parseInt(a2);

    var c=a1+a2;
    document.querySelector("#res").innerHTML=c;
} 
var input=(event)=>{
    console.log(event);
    if(event.keyCode>=48&&event.keyCode<57){
        return true;

    }else{
        return false;
    }
}  

