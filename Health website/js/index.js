
const slidesSrc = [
                    ['https://cdn.pixabay.com/photo/2017/05/11/19/34/ice-2305159_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2015/06/03/14/40/eating-796490_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2017/03/03/18/40/quark-2114690_960_720.jpg'],
                    
                    ['https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg']
                  ];

let sliderPos=0;

searchClicked = () =>{
    let x = document.getElementById("searchInfo");
    alert("you searched for " + x.value + " but sadly we dont have it [.-_-.]");
}

handleSearch = () =>{
    console.log(event);
    if(event.keyCode===13) {
        searchClicked();
    }
}

slide = () =>{
   let name = event.target.getAttribute("name");
   if (name=="arrow_left") {
    if (sliderPos==0){
        sliderPos=slidesSrc.length-1;
        document.getElementById('slider_img1').setAttribute("src",slidesSrc[sliderPos][0]);
        document.getElementById('slider_img2').setAttribute("src",slidesSrc[sliderPos][1]);
        document.getElementById('slider_img3').setAttribute("src",slidesSrc[sliderPos][2]);
    }
    else{
        sliderPos--;
        document.getElementById('slider_img1').setAttribute("src",slidesSrc[sliderPos][0]);
        document.getElementById('slider_img2').setAttribute("src",slidesSrc[sliderPos][1]);
        document.getElementById('slider_img3').setAttribute("src",slidesSrc[sliderPos][2]);
    }
   }
   else{
    if (sliderPos==slidesSrc.length-1){
        sliderPos=0;
        document.getElementById('slider_img1').setAttribute("src",slidesSrc[sliderPos][0]);
        document.getElementById('slider_img2').setAttribute("src",slidesSrc[sliderPos][1]);
        document.getElementById('slider_img3').setAttribute("src",slidesSrc[sliderPos][2]);
    }
    else{
        sliderPos++;
        document.getElementById('slider_img1').setAttribute("src",slidesSrc[sliderPos][0]);
        document.getElementById('slider_img2').setAttribute("src",slidesSrc[sliderPos][1]);
        document.getElementById('slider_img3').setAttribute("src",slidesSrc[sliderPos][2]);
    }
   }
}

expandMenu = () =>{
    let result=false;
    document.getElementById('nav_menu').classList.forEach(x=>{
        if (x=="display_none"){
            result=true;
        }
    });
   if (result) {
    document.getElementById('nav_menu').classList.remove('display_none')
   }
   else{
    document.getElementById('nav_menu').classList.add("display_none");
   }    
}