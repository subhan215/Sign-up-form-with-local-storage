function storeData() {
    let data = localStorage.getItem("userData");
    console.log(data);
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPassword").value;
    let obj = {
        userEmail,
        userPass
    }
   
    if (!data) {
        localStorage.setItem("userData", JSON.stringify([obj]))
    }
    
    else {
        let usersData = JSON.parse(data);
        let flag = false;
        for(var i = 0; i < usersData.length; i++){
            if(obj.userEmail == usersData[i].userEmail){
                alert("Email already exist");
                flag = true;
            }
        }
        if(flag == false){
               usersData.push(obj)
                userEmail = "";
                userPass = "";
                localStorage.setItem("userData", JSON.stringify(usersData))
        }
    }
   


}
function edit(){
    let data = localStorage.getItem("userData");
    let userData = JSON.parse(data);
    let ind = +prompt("Enter the index at which you want to edit value");
    userData[ind].userEmail = prompt("Enter edit email" , userData[ind].userEmail);
    userData[ind].userPass = prompt("Enter edit password" , userData[ind].userPass);
    localStorage.setItem("userData", JSON.stringify(userData))
}
function delOne(){
    var delOne = prompt("Enter the email you want to delete");
    let data = localStorage.getItem("userData");
    let userData = JSON.parse(data);
    let flag = false;
   
    for (var i = 0; i < userData.length; i++){
        if(userData[i].userEmail == delOne){
            userData.splice(i, 1);
            localStorage.setItem("userData", JSON.stringify(userData))
            flag = true;
        }
    }
    if(!flag){
        alert("Enter correct email");
    }
}
function delAll(){
    localStorage.removeItem("userData")
}