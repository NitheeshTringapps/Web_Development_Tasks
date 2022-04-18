let i=1;
const currentImageIcon=document.querySelectorAll("button");
currentImageIcon[0].setAttribute("style","background-color: #000000;");
setInterval(nextImage, 3000);
function nextImage(){
    i++;
    if(i > 5){
        i = 1;
    }
    changeImage(i);
}
function prevImage(){
    i--;
    if(i < 1){
        i = 5;
    }
    changeImage(i);
}
function changeImage(x){
    i = x;
    document.getElementById("images").setAttribute("src", `./images/bike${i}.png`);
    for(let k = 0; k < 5; k++){
        if(k == x-1){
            currentImageIcon[k].setAttribute("style","background-color: #000000;");
        }
        else{
            currentImageIcon[k].setAttribute("style","background-color: none;");
        }
    }
}