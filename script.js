i=0;
const imgsrc = [];
const desc = [];
const title = [];
const links =[];
const giflinks =["static/m4.gif","static/m1.gif","static/m2.1.gif","static/m3.gif","static/m5.gif"];

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}


for(let i=0; i < 5; i++){
    imgsrc[i] = document.getElementsByClassName('movie-img')[i].src;

    desc[i] = document.getElementsByClassName("movie-description")[i].innerHTML;

    title[i]=document.getElementsByClassName('movie-title')[i].innerHTML;

    links[i]=document.getElementsByClassName('trailer')[i].innerHTML;

    }




async function slideshow(i){


    document.getElementById("movie-img").style.animation =  'fade1 0.5s';
    await delay(400);
    document.getElementById("movie-img").style.animation =  '';
    document.getElementById("movie-img").src = imgsrc[i];
    document.getElementById("movie-title").innerHTML = title[i];
    document.getElementById("movie-description").innerHTML = desc[i];
    document.getElementById("trailer").innerHTML = links[i];
    document.getElementById("movie-img").style.animation =  'fade2 0.7s';
    document.getElementById("movies").style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("+ giflinks[i] +") no-repeat center";
    document.getElementById("movies").style.backgroundSize = "cover";

    if(i==0)
    document.getElementById("movie-img").style.borderColor=  "orangered";
    
    if(i==1)
    document.getElementById("movie-img").style.borderColor=  "darkgoldenrod";
    

    if(i==2)
    document.getElementById("movie-img").style.borderColor=  "greenyellow";
   

    if(i==3)
    document.getElementById("movie-img").style.borderColor=  "cyan";

    if(i==4)
    document.getElementById("movie-img").style.borderColor=  "rgb(218, 217, 217)";
}

function next(){
    if(i==4)
        i=0;
    else
        i=i+1;

    slideshow(i);
}

function previous(){
    if(i==0)
        i=4;
    else
        i=i-1;

    slideshow(i);
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (window.pageYOffset > 5  ) {
    document.getElementById("logo").style.marginBottom = "0px";
    document.getElementById("logo").style.maxWidth = "40px";
    document.getElementById("page-title").style.display = "none";
    document.getElementById("main-title").style.paddingLeft="0px";

    document.getElementById("link-container").style.display="none";
    document.getElementById("link-container-min").style.display="flex";
    // document.getElementById("link-container-min").style.display ="inline-block";

    for(let i=0;i<4;i++){
        document.getElementsByClassName("nav-link")[i].style.padding = "10px";
        document.getElementsByClassName("nav-link")[i].style.color = "white";
    }
    

  } else {
    document.getElementById("logo").style.display = "block";
     document.getElementById("logo").style.maxWidth = "60px";
    document.getElementById("page-title").style.display = "block";
    document.getElementById("main-title").style.paddingLeft="30px";
    


    for(let i=0;i<4;i++){
        document.getElementsByClassName("nav-link")[i].style.padding = "10px";
        document.getElementsByClassName("nav-link")[i].style.color = "white  ";

    }

    document.getElementById("link-container").style.display="flex";
    document.getElementById("link-container-min").style.display="none";
    

    // document.getElementById("link-container").style.display="inline";
    // document.getElementById("link-container-min").style.display ="none";


  }

 
}

class fform{
    constructor(
        name,
        age,
        gender,
        movie1,
        movie2,
        movie3,
        movie4,
        movie5,
        ){
        this.name = name;
        this.age = age;
        this.gender=gender;
        this.movie1=movie1;
        this.movie2=movie2;
        this.movie3=movie3;
        this.movie4=movie4;
        this.movie5=movie5;
    }
  }


function formresult(){

    let form = new fform();

    let n =  document.getElementById("nameinput").value;
    let a =  document.getElementById("ageinput").value;

    if( a<=12 || a>=95 ){
        window.alert("Enter a valid age");
        return;
    }

    let g;
    for(i=0;i<3;i++)
        if(document.getElementsByClassName("radio-input")[i].checked)
            g = document.getElementsByClassName("radio-input")[i].value;
  
    let m1 = document.getElementById("movie1").value;
    let m2 = document.getElementById("movie2").value;
    let m3 = document.getElementById("movie3").value;
    let m4 = document.getElementById("movie4").value;
    let m5 = document.getElementById("movie5").value;

    if(n!="",a!="",g!="",m1!="",m2!="",m3!="",m4!="",m5!="")
    {
        form = new fform(n,a,g,m1,m2,m3,m4,m5);
        console.log(form);
    }
    else
    window.alert("Enter all values");


}