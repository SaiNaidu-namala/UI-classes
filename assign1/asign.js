var productdetails={
    name:'laptop',
    price:49999,
    manufacture:'dell',
    sellername:'amazon',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMc2bR2nGw54PkH6lqyEQwOm_L5n6MexSxqQ&usqp=CAU'

}
var renderproducedetails=()=>{
    var mainli=document.createElement("li");
    var ulTag=document.createElement("ul");
    ulTag.setAttribute("class","details");

    var li1=document.createElement("li");
    li1.innerHTML='productname:'+productdetails.name;
    ulTag.append(li1);
     
    var li2=document.createElement("li");
    li2.innerHTML='price :'+productdetails.price;
    ulTag.append(li2);

    var li3=document.createElement("li");
    li3.innerHTML='manufacture :'+productdetails.manufacture;
    ulTag.append(li3);

    var li4=document.createElement("li");
    li4.innerHTML='sellername :'+productdetails.sellername;
    ulTag.append(li4);

    var li5=document.createElement("li");
    var imgTag=document.createElement("img");
    imgTag.setAttribute("src",productdetails.image);
    li5.append(imgTag);
    ulTag.append(li5);


    mainli.append(ulTag);
    document.querySelector(".container").append(mainli);

}
renderproducedetails();