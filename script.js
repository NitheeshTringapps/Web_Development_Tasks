let Tab = document.getElementsByClassName("collapseTab");
for(let i = 0; i < Tab.length; i++){
    Tab[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}