var productdata=[
    {
        name:'laptop',
        price:49999,
        manufacture:'hp',
        seller:'amazon.in',
        image:'https://in-media.apjonlinecdn.com/magefan_blog/hp-laptop-buying-guide-hero.jpg'
    },
    {
        name:'realme mobile',
        price:25999,
        manufacture:'realme',
        seller:'realme store',
        image:'https://i0.wp.com/mobileview24.com/wp-content/uploads/2023/05/Realme-11-Pro-500x500.jpg',
    }
]

var renderdetails=(productdata)=>{
    var mainli=document.createElement("li");
    var ulTag=document.createElement("ul");
    ulTag.setAttribute("class","pdetails");

    var li1=document.createElement("li");
    li1.innerHTML='product name : '+productdata.name;
    ulTag.append(li1);

    var li2=document.createElement("li");
    li2.innerHTML='product price : '+productdata.price;
    ulTag.append(li2);

    var li3=document.createElement("li");
    li3.innerHTML="product manufacture : "+productdata.manufacture;
    ulTag.append(li3);

    var li4=document.createElement("li");
    li4.innerHTML='product seller : '+productdata.seller;
    ulTag.append(li4);

    var li5=document.createElement("li");
    var imgTag=document.createElement("img");
    imgTag.setAttribute("src",productdata.image);
    li5.append(imgTag);
    ulTag.append(li5);
    mainli.append(ulTag);
    document.querySelector(".container").append(mainli);

}

for(var i=0;i<productdata.length;i++){
    renderdetails(productdata[i]);
}