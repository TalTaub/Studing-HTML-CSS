var slide1= `
<h2>Something smart to say</h2>
<img src="https://cdn.pixabay.com/photo/2015/01/22/15/13/businessman-607834_960_720.png" alt="">
<p>sdjflef lsjd fljsdflsdjfl sdfljsd fljsdf sldjflsjdf lsdjf sldjflsdlfjsdlf sdlfjsldfjsld fsldjflsd flsdjf sldjfsd lfjsdljf </p>
<h3>1111111thinies with puppie</h3>
`

var slide2= `
<h2>Something smart to say</h2>
<img src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg" alt="">
<p>sjkdjf sdfjsdfjsdkfjsdjf kjsd fksdj fkjsdfkjsdfksdjfk </p>
<h3>22222222ther thsdfs fsh </h3>
`

var slide3= `
<h2>Something smart to say</h2>
<img src="https://cdn.pixabay.com/photo/2020/01/23/16/44/boxing-4788183_960_720.jpg" alt="">
<p>skjdfkjsd fksdjfksdf ksdjfksdjfksdj fksd </p>
<h3>333333333333weotwhuethu32to4ntou</h3>
`

var slide4= `
<h2>Something smart to say</h2>
<img src="https://cdn.pixabay.com/photo/2013/10/06/12/57/giovanni-da-bologna-191474_960_720.jpg" alt="">
<p>sdkjfk we fkwefweufwef wkeuf wekfwekufwekfubwekfuwe fwuegojf bdip r bdfoj bdf333 </p>
<h3>4444444444BLAAAAAAaaaaaaaa</h3>
`

var slides=[slide1,slide2,slide3,slide4];
let slideNumber=0;
document.getElementById("slider_content").innerHTML = slides[slideNumber];

arrowClick = ()=>{
    if (event.target.getAttribute('name')=="right_arrow") {
        slideNumber++;
        if(slides[slideNumber]!=slides[slides.length]){
            document.getElementById("slider_content").innerHTML = slides[slideNumber];
        }
        else{
            slideNumber=0;
            document.getElementById("slider_content").innerHTML = slides[slideNumber];
        }  
    }
    else{
        if(slides[slideNumber]!=slides[0]){
            slideNumber--;
            document.getElementById("slider_content").innerHTML = slides[slideNumber];
        }
        else{
            slideNumber=slides.length-1;
            document.getElementById("slider_content").innerHTML = slides[slideNumber];
            }  
        }
}