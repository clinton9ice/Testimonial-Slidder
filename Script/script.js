"use strict";
let carousel = document.querySelectorAll(".txtSection");
let id = document.querySelectorAll(".imgContainer")
let right = document.querySelector(".right")
let left = document.querySelector(".left")
let index = 0;
right.onclick = ()=>{
  if(index >= carousel.length-1){
    index = 0;
  }else{
    index++;
  }
slide(id)
  slide(carousel)

}
left.onclick = ()=>{
  if(index == 0){
    index = carousel.length-1
   }else{
index--
   }
   slide(carousel)
 slide(id)
}
function slide(l){
  for(var i = 0; i < l.length; i++){
      l[i].classList.remove('active');
  }
  l[index].classList.add('active');
}