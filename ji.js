let navmenu = document.getElementById("nav-menu")
let navToggle = document.getElementById("nav-toggle")
let navclose = document.getElementById("nav-close")


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navmenu.classList.add("show-menu")
        console.log("njkn")
    })
}


if(navclose){
    navclose.addEventListener("click",()=>{
        navmenu.classList.remove("show-menu")
    })
}

// remove menu in movile
let navlink = document.querySelectorAll(".nav-links")


let appai = ()=>{
    navmenu.classList.remove("show-menu")
}

navlink.forEach(l => l.addEventListener("click",appai))




const swiperWatches = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween:32,
    grabCursor:true,
    effect:'creative',
    creativeEffect:{
        prev:{
            translate:[-100,0,-500],
            rotate:[0,0,15],
            opacity:0
        },
        next:{
            translate:[100,0,-500],
            rotate:[0,0,-15],
            opacity:0
        }
    },



    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

  });

gsap.from(".home-img",1.5,{opacity:0,y:150,delay:.1})
gsap.from(".home-data",1,{opacity:0,x:-100,delay:.8})
gsap.from(".home-info",1,{opacity:0,x:100,delay:.8})