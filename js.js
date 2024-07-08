// header
window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY>0);
})

// nav
function openNav() {
    document.getElementById("myNav").style.width = "60%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


// scrolling
let scroll =document.querySelector('.scroll') 
function moveNext(){
    let items = document.querySelectorAll('.item');
    scroll.appendChild(items[0]);
}function movePrev(){
    let items = document.querySelectorAll('.item');
    scroll.prepend(items[items.length-1]);
}window.addEventListener('wheel',function(event)
{
if(event.deltaY>0){
    moveNext();
}else{
    movePrev();
}
})