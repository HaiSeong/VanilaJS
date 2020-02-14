const UserNameController = document.querySelector(".js-user");
const UserNameEnter = document.querySelector(".js-form");
var UserName;

function setName() {
    localStorage.setItem("username",null);
    // 입력한 이름을 username에 추가 하는 코드
    localStorage.setItem("username","HaiSeong");
    UserName = localStorage.getItem("username");
}

function printName(name){
    if(UserName === null){ // 이름 아직 입력 안한 상태
        UserNameController.querySelector("display") = "none";
        UserNameEnter.querySelector("input").querySelector("display") = "block";
    }
    else{ // 이름 입력 상태
        UserNameController.querySelector("h1").innerText = `Hi ${name}`;
        UserNameController.querySelector("display") = "block";
        UserNameEnter.querySelector("display") = "none";
    }
}

function init(){
    setName();
    printName(UserName);
}

init();