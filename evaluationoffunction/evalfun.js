var getvalue=()=>{
    var a=document.querySelector("#fval").value;
    a=parseInt(a);
    var b=document.querySelector("#sval").value;
    b=parseInt(b);
    var exp=document.querySelector("#abc").value;
    var res=0;
    switch(exp){
        case 'add': res=a+b; break;
        case 'sub': res=a-b; break;
        case 'mul': res=a*b; break;
        case 'div': res=a/b; break;
        default: res='wrong choice'; break;

    }
    document.querySelector("#res").innerHTML=res;
    // document.querySelector("#res").setAttribute("style" ,"color: red");
}
