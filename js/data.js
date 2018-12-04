

let header = document.getElementById('header')
header.addEventListener("mouseover",function(){ 
    if( header.classList.contains("main") === false){
        header.classList.add("main");
    }
});

header.addEventListener("mouseout",function(){
    if( header.classList.contains("main") === true){
        header.classList.remove("main");
    }
});



$('.parallax-window').parallax({imageSrc: '/img/45464645-min.png'});



