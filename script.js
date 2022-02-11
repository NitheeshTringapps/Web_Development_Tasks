function search(){
    let searchFruitName=document.querySelector("#searchFruit").value.toUpperCase();
    let myItems=document.querySelectorAll(".item");
    for(let i=0;i<myItems.length;i++){
      let currentFruitName=myItems[i].querySelector("h4").innerText.toUpperCase();
      if(currentFruitName.indexOf(searchFruitName)>-1){
        myItems[i].style.display="";
      }
      else{
        myItems[i].style.display="none";
      }
    }
  }