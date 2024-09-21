const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
var elem  = document.querySelector("#elem-list")
 var fixed  = document.querySelector(".image-fixed")
 elem.addEventListener("mouseenter",function(){
      fixed.style.display  = " block"
 });
 elem.addEventListener("mouseleave",function(){
    fixed.style.display  = " none"
});
var  elems = document.querySelectorAll(".elem") 
elems.forEach(function(e){
   e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
   fixed.style.backgroundImage = `url(${image})`
   })
})
