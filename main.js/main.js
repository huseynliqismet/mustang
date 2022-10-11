// var a=1;
// var images=[];


// images[0]="image1.webp";
// images[1]="image2.webp";
// images[2]="image3.webp";
// images[3]="image4.webp";
// images[4]="image5.webp";

// function changeimg() {
//     document.querySelector(".slide") .src=images[a];
//     if( a < images.length){
//         a++;

//     }else {
//         a=1;
//     }
//     setTimeout("changeimg()" , 3000);
// }
// changeimg()


const sliders= document.querySelectorAll(".slayd");
const next=document.getElementById("next");
const prew=document.getElementById("prew");
const auto = true;
let slideinterval;
const nextslide=()=>{
    const activeslider=document.querySelector(".active");
    activeslider.classList.remove("active")


    if(activeslider.nextElementSibling){
        activeslider.nextElementSibling.classList.add("active");
    
    }else{
        sliders[0].classList.add("active")
    }
}
const prewslide=()=>{
    const activeslider=document.querySelector(".active");
    activeslider.classList.remove("active");
    if(activeslider.previousElementSibling){
        activeslider.previousElementSibling.classList.add("active");
    
    }else{
        sliders[sliders.length-1].classList.add("active");
    }
}
next.addEventListener("click",()=>{
    nextslide();
    clearInterval;
    if(auto){
        slideinterval=setInterval(nextslide,7000);
    }
});
prew.addEventListener("click",()=>{
    prewslide();


});
if(auto){
    slideinterval=setInterval(nextslide,7000);
}
// const picture=document.querySelectorAll("picture-collage")
// const nextslayd=()=>{
//     const activeslayd=document.querySelector(".active")
//     activeslayd.classList.remove("active")
//     for(c=0,c<picture.lenght-1,c++)
// }
