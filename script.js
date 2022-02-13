let Tab = document.getElementsByClassName("collapseTab");
for(let i = 0; i < Tab.length; i++){
    Tab[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}
function newTab(event){
    event.preventDefault();
    var myContainer=document.getElementById("container");
    var newCollapseTab=document.createElement("div");
    newCollapseTab.setAttribute("class","collapseTab");

    var heading=document.createElement("h1");
    heading.setAttribute("class", "heading");
    heading.innerText=document.getElementById("newHeading").value;
    
    var content=document.createElement("p");
    content.setAttribute("class", "content");
    content.innerText=document.getElementById("newContent").value;
    
    newCollapseTab.appendChild(heading);
    newCollapseTab.appendChild(content);
    myContainer.appendChild(newCollapseTab);
    
    newCollapseTab.addEventListener('click', function(){
        this.classList.toggle('active');
    })
}
