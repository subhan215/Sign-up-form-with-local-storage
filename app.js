const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function storeData() {
    let data = localStorage.getItem("userData");
    console.log(data);
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPassword").value;
    let obj = {
        userEmail,
        userPass
    }
    /* const validateEmail = (userEmail) => {

     return String(userEmail)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      }; */
   
    if (!data && String(userEmail).toLowerCase().match(validateEmail)) {
        localStorage.setItem("userData", JSON.stringify([obj]))
    }
    else if((!data && !String(userEmail).toLowerCase().match(validateEmail) || !String(userEmail).toLowerCase().match(validateEmail) )){
        alert("Please write correct email")
    }
    
    else if(String(userEmail).toLowerCase().match(validateEmail)){
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
function Password(e){
    var input = document.getElementById("userPassword");
   switch (input.type) {
       case "password":
        e.className = "far fa-eye-slash";
        input.type = "text";
           break;
        case "text":
        e.className = "far fa-eye";
        input.type = "password";
   
       default:
           break;
   }
}