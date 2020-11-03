const data = [{
    url: "./pictures/DSC01431.jpg",
    text: "🏰 Disneyland 2020"
},{
    url: "./pictures/DSC01518.jpg",
    text: "🏰 Disneyland 2020"
},{
    url: "./pictures/DSC01298.jpg",
    text: "🏰 Disneyland 2020"
},{
    url: "./pictures/DSC02203.jpg",
    text: "Mom made cake 🎂"
},{
    url: "./pictures/DSC02108.jpg",
    text: "📸 Photoshoot - Hayo"
},{
    url: "./pictures/DSC02238.jpg",
    text: "✨ Twinkel twinkle little star"
},{
    url: "./pictures/DSC01512.jpg",
    text: "🏰 Disneyland 2020"
},{
    url: "./pictures/DSC02242.jpg",
    text: "Orange skies"
},{
    url: "./pictures/DSC01894.jpg",
    text: "📸 Photoshoot - Hayo"
}]

const loadImages = async function(data){

    let html =document.querySelector(".c-content__wrapper").innerHTML;

    document.querySelector(".c-content__wrapper").innerHTML += `<div class="c-picture" data-aos-once="true" data-aos="fade-down" >
                <img async=on  data-src="${data.url}" src="${data.url}" class="lazyload" alt="">
                <p>${data.text}</p>
            </div>`;    
    console.log(document.querySelectorAll(".c-picture").length)
    if(document.querySelectorAll(".c-picture").length == data.length){
        
    }
}


const init = async function(){
    //await lazyload();
    
    data.forEach(element => {
        console.log(element)
         loadImages(element);
    });
    imagesLoaded( document.querySelector('.c-content__wrapper'), function( instance ) {
        document.querySelector(".loader").style.display = "none";
      });
    if(document.querySelector(".development")){
        console.log("zit daar")
        document.querySelectorAll(".c-picture").forEach(element => {
            element.addEventListener("click", function(){
                let img = element.childNodes[1].src;
                console.log( element.childNodes[3])
                let text = element.childNodes[3].getAttribute("data-url");
                window.open(text,"_blank")
                
            })
        });
    }
    else{
        console.log("zit hier")
        document.querySelectorAll(".c-picture").forEach(element => {
            element.addEventListener("click", function(){
                let img = element.childNodes[1].src;
                let text = element.childNodes[3].childNodes[0].textContent;
                console.log(text)
                window.scrollTo(-100, 0); 
                document.querySelector(".c-picture__viewer").childNodes[3].src =img;
                document.querySelector(".c-picture__viewer").childNodes[5].textContent =text;
                document.querySelector(".c-content").style.display = "none";
                document.querySelector(".c-picture__viewer").style.zIndex = "100";
                unfade(document.querySelector(".c-picture__viewer"))
                // document.querySelector(".c-picture__viewer").style.display= "flex"
                document.querySelector(".c-picture__viewer").style.display = "flex";
                setTimeout(() => {
                    unfade(document.querySelector(".c-picture__viewer"))
                }, 10);
                
            })
        });
    }
    

    document.querySelector(".c-insta").addEventListener("click", function(){
        window.open('https://www.instagram.com/elias.picture/', '_blank');

    });
    document.querySelector(".c-mail").addEventListener("click", function(){
        window.open('mailto:elias6503@gmail.com?subject=I%20want%20to%20hire%20you', '_blank');

    });
    document.querySelector(".c-linked").addEventListener("click", function(){
        window.open('https://www.linkedin.com/in/elias-debaveye-3087a417a/', '_blank');

    });
    document.querySelector(".c-viewer__close").addEventListener("click", function(){
        
    
        // document.querySelector(".c-picture__viewer").style.display= "none"
        document.querySelector(".c-content").style.display = "block";
        
        fade(document.querySelector(".c-picture__viewer"))
        // document.querySelector(".c-picture__viewer").style.opacity = 0;
        // document.querySelector(".c-picture__viewer").style.display = "flex";
        
    })
    document.querySelector(".c-closemenu").addEventListener("click", function(){

        document.querySelector(".c-menu").classList.remove("u-menu-show");
        // document.querySelector(".content").classList.remove("u-zoomout");
        // document.querySelector(".c-content").style.display = "block";
        document.querySelector("body").style.overflow = "unset";

    });
    document.querySelector(".c-nav__menu").addEventListener("click", function(){
        
        document.querySelector(".c-menu").classList.add("u-menu-show");
        // document.querySelector(".content").classList.add("u-zoomout");
        // document.querySelector(".c-content").style.display = "none";
        document.querySelector("body").style.overflow = "hidden";

    });
};

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            element.style.zIndex = "-10";
            element.style.display = "none";
            clearInterval(timer);
            
            // element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 20);
    
    // element.style.zIndex = "-1";
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    // element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            element.style.zIndex = "100";
            clearInterval(timer);
            
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

document.addEventListener("DOMContentLoaded", init);
