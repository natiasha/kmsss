//slider
let imagesslides = ["image/slider1.png", "image/slider2.png", "image/slider3.png"]
let n = 1;
let t = 5000;

function slaider(){
  let slide = document.querySelector(".slider img");
  slide.src = imagesslides[n];

  if(n < imagesslides.length - 1){
    n=n+1; 
  }
  else { 
    n = 0;
  }

  setTimeout("slaider()", t);
}
    window.onload=slaider;
