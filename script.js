var form=document.querySelector("#myForm");
var myTbody=document.querySelector("tbody");
const list = [];
let x = 0;
form.addEventListener("submit", function(evt){
    evt.preventDefault();
    myForm(evt, x);
    x++;
});

function myForm(event, val){
    event.preventDefault();
    list[val] = {
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        maraitalStatus: document.querySelector('input[name="maraitalStatus"]:checked').value,
        phone: document.getElementById("phone").value,
        hobby: hobby(),
        hobbiesChecked: hobbiesChecked(),
        address: document.getElementById("address").value
    };
    function hobby(){
        var hobby = [], i = 0;
        if(document.getElementById("games").checked){
            hobby[i++] = document.getElementById("games").value;
        }
        if(document.getElementById("reading").checked){
            hobby[i++] = document.getElementById("reading").value;
        }
        if(document.getElementById("writing").checked){
            hobby[i++] = document.getElementById("writing").value;
        }
        return hobby;
    }
    function hobbiesChecked(){
        var hobbiesChecked = [];
        hobbiesChecked[0]=document.getElementById("games").checked;
        hobbiesChecked[1]=document.getElementById("reading").checked;
        hobbiesChecked[2]=document.getElementById("writing").checked;
        return hobbiesChecked;
    }
    if(val == x){
        var myTr=document.createElement("tr");
        var newDetail=[];
        myTr.setAttribute("class","details");
        for(let i=0;i<8;i++){
            newDetail[i]=document.createElement("td");
        }
        newDetail[0].innerText=list[x].name;
        newDetail[1].innerText=list[x].dob;
        newDetail[2].innerText=list[x].gender;
        newDetail[3].innerText=list[x].maraitalStatus;
        newDetail[4].innerText=list[x].phone;
        newDetail[5].innerText=list[x].hobby;
        newDetail[6].innerText=list[x].address;
        var delBtn=document.createElement("button");
        edBtn.innerText="edit";
        delBtn.innerText="del";
        edBtn.setAttribute("class","edits");
        delBtn.setAttribute("class","deletes");
        edBtn.setAttribute("onclick",`edit(${x})`);
        delBtn.setAttribute("onclick",`del(${x})`);
        newDetail[7].appendChild(edBtn);
        newDetail[7].appendChild(delBtn);
        for(let i=0;i<8;i++){
            myTr.appendChild(newDetail[i]);
        }
        myTbody.appendChild(myTr);
        var edBtn=document.createElement("button");
    }
    else{
        var myButton = document.getElementById("sub");
        myButton.innerHTML="Submit";
        myButton.removeAttribute("onclick");
    }
    clrForm();
}

function edit(val){
    document.getElementById("name").value=list[val].name;
    document.getElementById("dob").value=list[val].dob;
    document.getElementById("gender").value=list[val].gender;
    if(list[val].maraitalStatus=="Married"){
        document.getElementById("married").checked=true;
    }
    else{
        document.getElementById("unmarried").checked=true;
    }
    document.getElementById("phone").value=list[val].phone;
    if(list[val].hobbiesChecked[0]){
        document.getElementById("games").checked=true;
    }
    else{
        document.getElementById("games").checked=false;
    }
    if(list[val].hobbiesChecked[1]){
        document.getElementById("reading").checked=true;
    }
    else{
        document.getElementById("reading").checked=false;
    }
    if(list[val].hobbiesChecked[2]){
        document.getElementById("writing").checked=true;
    }
    else{
        document.getElementById("writing").checked=false;
    }
    document.getElementById("address").value=list[val].address;
    var myButton = document.getElementById("sub");
    myButton.innerHTML="Update";
    myButton.setAttribute('onclick', `myForm(event,${val})`)
}

function del(x){
    alert("Are you sure to delete this row?");
    var details = myTbody.querySelectorAll(".details");
    details[x].innerHTML="";
    clrForm();
}

function clrForm(){
    document.getElementById("name").value="";
    document.getElementById("dob").value="";
    document.getElementById("gender").value="";
    document.getElementById("married").checked=false;
    document.getElementById("unmarried").checked=false;
    document.getElementById("phone").value="";
    document.getElementById("games").checked=false;
    document.getElementById("reading").checked=false;
    document.getElementById("writing").checked=false;
    document.getElementById("address").value="";
}
