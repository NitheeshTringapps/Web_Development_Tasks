const list = [];
function myForm(){
    list.push({
        name: document.forms["myForm"]["name"].value,
        dob:document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        maraitalStatus: document.querySelector('input[name="maraitalStatus"]:checked').value,
        phone: document.getElementById("phone").value,
        hobby: hobby(),
        address: document.getElementById("address").value
    });
    function hobby(){
        let hobbies = "";
        var checkboxes = document.querySelectorAll('input[name="hobby"]:checked');
        for(let checkbox of checkboxes){
            hobbies += checkbox.value + " ";
        }
        return hobbies;
    }
    let tableValues = "<tr><th>S.No</th><th>Name</th><th>Date of Birth</th><th>Gender</th><th>Maraital Status</th><th>Phone Number</th><th>Hobby</th><th>Address</th><th>Action</th></tr>";
    for(let i in list){
        if(i != undefined){
            tableValues += "<tr><td>" + (parseInt(i)+1) + "</td><td>" + list[i].name + "</td><td>" + list[i].dob + "</td><td>" + list[i].gender + "</td><td>" + list[i].maraitalStatus + "</td><td>" + list[i].phone + "</td><td>" + list[i].hobby + "</td><td>" + list[i].address + "</td><td><button name=" + i + ">Edit</button><button name=" + i + ">Delete</button></td></tr>";
        }
    }
    document.getElementById("data").innerHTML = tableValues;
}
function deleteData(name){
    delete list[name];
    let tableValues = "<tr><th>S.No</th><th>Name</th><th>Date of Birth</th><th>Gender</th><th>Maraital Status</th><th>Phone Number</th><th>Hobby</th><th>Address</th><th>Action</th></tr>";
    for(let i in list){
        if(i != undefined){
            tableValues += "<tr><td>" + (parseInt(i)+1) + "</td><td>" + list[i].name + "</td><td>" + list[i].dob + "</td><td>" + list[i].gender + "</td><td>" + list[i].maraitalStatus + "</td><td>" + list[i].phone + "</td><td>" + list[i].hobby + "</td><td>" + list[i].address + "</td><td><button name=" + i + ">Edit</button><button name=" + i + "onclick='deleteData(name)'>Delete</button></td></tr>";
            }
    }
    document.getElementById("data").innerHTML = tableValues;
}