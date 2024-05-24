  
  window.onscroll = function(){
    var navbar = document.querySelector(".navdiv");
    var image = document.querySelector('#imgss')
    // navbar.style = box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    var image1 = document.querySelector('#imgss1');
    var distance = document.documentElement.scrollTop;
    if(distance>250){
        navbar.classList.add('scroll')
        image.style.display = "none";
        image1.style.display = "flex";
    }else{
        navbar.classList.remove('scroll')
        image.style.display = "flex"
        image1.style.display = "none";
    }
  }