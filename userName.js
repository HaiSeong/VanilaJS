const UserNameContainer = document.querySelector(".js-name");
const UserNameEnter = UserNameContainer.querySelector(".js-nameEnter");
const UserNameIndicator= UserNameContainer.querySelector(".js-nameIndicator");
const UserNameTitle = UserNameIndicator.querySelector("h1");
var UserName;

function setName(){
    localStorage.setItem("username","HaiSeong");
    UserName = localStorage.getItem("username");
}

function printName(name){
    if(name === null){
        // 이름이 입력 안될 경우
        UserNameTitle.innerText=null;
    }
    else{
        // 이름이 입력되어있는 경우
        UserNameTitle.innerText = `Hi ${name}`;
        UserNameEnter.remove();
    }
}

function init(){
    setName();
    printName(UserName);
}

init();