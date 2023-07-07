var generatecapcha=()=>{
    var capchavalue=getrandomno()+getrandomlowerchar()+getrandomupperchar()+getrandomno()+getrandomlowerchar()+getrandomupperchar()+getrandomno();
    document.querySelector("#capchacontainer");
}
var getrandomno=()=>{
    var max=10;
    var randomnumber=Math.floor(Math.random()*max);
    return randomnumber.toString();
}
var getrandomlowerchar=()=>{
    var lowerchar=['a','b','c','d','e','f','g','h','i']
    var randomindex=Math.floor(Math.random()*(lowerchar.length));
    return lowerchar[randomindex];
}
var getrandomupperchar=()=>{
    var upperchar=['A','B','C','D','E','F','G','H','I']
    var randomindex=Math.floor(Math.random()*(upperchar.length));
    return upperchar[randomindex];
}