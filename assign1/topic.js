var productdetails={
    product:'laptop',
    price:49999,
    company:'dell',
    seller:'amazon.in',
    img:'https://images-cdn.ubuy.co.in/633f5746a3fb9246b576d369-hp-stream-14-laptop-intel-celeron.jpg'
}
var data=()=>{
    var mainli=document.createElement('li');

    var ulTag=document.createElement('ul');
    ulTag.setAttribute("class","details");

    var li1=document.createElement("li");
    li1.innerHTML='product name : '+productdetails.product;
    ulTag.append(li1);

    var li2=document.createElement("li");
    li2.innerHTML='price : '+productdetails.price;
    ulTag.append(li2);

    var li3=document.createElement("li");
    li3.innerHTML='company : '+productdetails.company;
    ulTag.append(li3);

    var li4=document.createElement("li");
    li4.innerHTML='seller : '+productdetails.seller;
    ulTag.append(li4);

    var li5=document.createElement('li')
    var img=document.createElement('img');
    img.setAttribute('src',productdetails.img);
    li5.append(img);
    ulTag.append(li5);

    mainli.append(ulTag);
    console.log(ulTag);
    document.querySelector(".container").append(mainli);


}
data();