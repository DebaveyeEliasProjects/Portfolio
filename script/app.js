const data = [{
    name: "DSC01431.jpg",
    preview: "",
    text: "🏰 Disneyland 2020"
},{
    name: "DSC01518.jpg",
    preview: "",
    text: "🏰 Disneyland 2020"
},{
    name: "DSC01298.jpg",
    preview: "",
    text: "🏰 Disneyland 2020"
},{
    name: "DSC02203.jpg",
    preview: "",
    text: "Mom made cake 🎂"
},{
    name: "DSC02108.jpg",
    preview: "",
    text: "📸 Photoshoot - Hayo"
},{
    name: "DSC02238.jpg",
    preview: "",
    text: "✨ Twinkeletwinkle little star"
},{
    name: "DSC01512.jpg",
    preview: "",
    text: "🏰 Disneyland 2020"
},{
    name: "DSC02242.jpg",
    preview: "",
    text: "Orange skies"
},{
    name: "DSC01894.jpg",
    preview: "",
    text: "📸 Photoshoot - Hayo"
}]

const loadImages = async function(data){

    let html =document.querySelector(".c-content__wrapper").innerHTML;

    document.querySelector(".c-content__wrapper").innerHTML += `<div class="c-picture" data-aos-once="true" data-aos="fade-down" >
                <img async=on  data-src="./pictures/preview/${data.name}" src="./pictures/preview/${data.name}" class="lazyload" alt="">
                <p>${data.text}</p>
            </div>`;    
    console.log(document.querySelectorAll(".c-picture").length)
    if(document.querySelectorAll(".c-picture").length == data.length){
        
    }
}


const init = async function(){
    //await lazyload();
    let date = Date("2020-11-08T18:48:48+00:00");
    console.log(date);
    
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
        data.forEach(element => {
             loadImages(element);
        });
        imagesLoaded( document.querySelector('.c-content__wrapper'), function( instance ) {
            document.querySelector(".loader").style.display = "none";
          });
        console.log("zit hier")
        document.querySelectorAll(".c-picture").forEach(element => {
            element.addEventListener("click", function(){
                let img = element.childNodes[1].src;
                let text = element.childNodes[3].childNodes[0].textContent;
                console.log(text)
                window.scrollTo(-100, 0); 


                document.querySelector(".c-picture__viewer").childNodes[3].src ="./pictures/high/"+img.split('/')[5];


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
