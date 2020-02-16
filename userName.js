
const UserNameContainer = document.querySelector(".js-name");
const UserNameEnter = UserNameContainer.querySelector(".js-nameEnter");
const UserNameIndicator= UserNameContainer.querySelector(".js-nameIndicator");
const UserNameTitle = UserNameIndicator.querySelector("h1");
var UserName;

const CN_SHOWING = "showing";

function handleSubmit(event){
    event.prventDefalt
}

function setName(){
    UserNameEnter.addEventListener("submit",handleSubmit)
    localStorage.setItem("username","HaiSeong");
    UserName = localStorage.getItem("username");
}


function printName(name){
    if(name === null){
        // 이름이 입력 안될 경우
        UserNameIndicator.classList.add(CN_SHOWING)
    }
    else{
        // 이름이 입력되어있는 경우
        UserNameTitle.innerText = `Hi ${name}`;
    }
}

function init(){
    setName();
    printName(UserName);
}

init();