var generatecapcha=()=>{
    var capchavalue=getrandomno()+getrandomlowerchar()+getrandomupper()+getrandomupper()+getrandomno();
    document.querySelector("#capchacontainer").innerHTML=capchavalue;
}
var getrandomno=()=>{
    var max=10;
    var randomnumber=Math.floor(Math.random()*max);
    return randomnumber.toString();
}
var getrandomlowerchar=()=>{
    var lowerchar=['a','b','c','d','e','f','g','h','i'];
    var randomindex=Math.floor(Math.random()*(lowerchar.length));
    return lowerchar[randomindex];
}
var getrandomupper=()=>{
    var uppercase=['A','B','C','D','E','F','G','H','I']
    var randomindex=Math.floor(Math.random()*(uppercase.length));
    return uppercase[randomindex];
}