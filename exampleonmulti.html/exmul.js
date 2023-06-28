var productdata=[
    {
        name:"cpu",
        price:19999,
        manufacture:"hcl",
        seller:"pace electronics",
        image:"https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/electronics-computers/computer-peripherals/medium/20150409054658-29758.jpg",
    },

    {
        name:"keyboard",
        price:1999,
        manufacture:"zebronics",
        seller:"pace electronics",
        image:"https://techmartunbox.com/wp-content/uploads/2022/03/ZEBRONICS-ZEB-WAR-GAMING-USB-KEYBOARD-MOUSE-COMBO-Black-2.jpg"
    },

    {
        name:"mouse",
        price:999,
        manufacture:"emporis",
        seller:"pace electronics",
        image:"https://m.media-amazon.com/images/I/41%2BCPVLeXfL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
    }
]

var renderdetails=(productdata)=>{
    var mainli=document.createElement("li");
    var ulTag=document.createElement("ul");
    ulTag.setAttribute("class","exmul");

    var li1=document.createElement("li");
    li1.innerHTML="product name : "+productdata.name;
    ulTag.append(li);

    var li2=document.createElement("li");
    li2.innerHTML="product price : "+productdata.price;
    ulTag.append(li);

    var li3=document.createElement("li");
    li3.innerHTML="manufacture : "+productdata.manufacture;
    ulTag.append(li);

    var li4=document.createElement("li");
    li4.inner
    
}