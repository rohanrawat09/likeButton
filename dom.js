var cont = document.querySelector("#container");
var like = document.querySelector("i");
cont.addEventListener("dblclick",function(){
like.style.transform = "translate(-50%,-50%) scale(1)";
like.style.opacity = 0.8;
});
setInterval(function(){
    like.style.opacity = 0;
},1000)
setInterval(function(){
    like.style.transform = "translate(-50%,-50%) scale(0)";
},2000)