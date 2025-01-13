let btn1 = document.getElementById("mybtn")//reference of elements
let btn2 = document.getElementById("mybtn2")//reference of elements
let copyDiv = document.querySelector(".copyCode");//reference of elements
let rgb1 = "#000"//default values
let rgb2 = "#fff"//default values

const hexValues=()=>{
    let myHexValues = "0123456789abcdef"
    let color="#";
    for(i=0;i<6;i++){//<6 coz only 6 hex digit needed!!!
        color+=myHexValues[Math.floor(Math.random()*16)];
    }
    return color;
};

const handleButton1=()=>{
    rgb1= hexValues();//calling hexValues NOTE: arrow function must define before calling
    console.log(rgb1);//not necessary
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;//major implementation *Changing background*
    copyDiv.innerHTML = `background: linear-gradient(to right,${rgb1},${rgb2});`;//changing bg code for :) 
    btn1.innerHTML = rgb1//changing text of button
}
const handleButton2=()=>{
    rgb2= hexValues();
    console.log(rgb2);//not necessary
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background: linear-gradient(to right,${rgb1},${rgb2})`;
    btn2.innerHTML = rgb2;//changing text of button
}

btn1.addEventListener("click", handleButton1)//will occur only on click..
btn2.addEventListener("click", handleButton2)//will occur only on click..

copyDiv.addEventListener("mouseenter", ()=>{
    navigator.clipboard.writeText(copyDiv.innerHTML);//helps to copy code directly...
    confirm('code copied');//for letting know if the code is copied  *NOT NECESSARY*
})
