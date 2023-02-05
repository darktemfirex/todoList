const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutForm = document.querySelector("#logout-form");
const logoutInput = document.querySelector("#logout-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY  = "username";

function onLoginSubmit(event)
{
    event.preventDefault(); //브라우저 기본동작 못하게 설정 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    //localstroage
    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings();
}

function onLogoutSubmit(event)
{
    event.preventDefault(); //브라우저 기본동작 못하게 설정
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME); 
    logoutForm.classList.add(HIDDEN_CLASSNAME); 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
}


function paintGreetings()
{
    const username = localStorage.getItem("username");
    greeting.innerText = `${username} 님 로그인 중`; /*백틱 */
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    logoutForm.classList.remove(HIDDEN_CLASSNAME); 
    logoutForm.addEventListener("submit",onLogoutSubmit)    
}

//localstroage 값 읽어옴
const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit)
}else{
    paintGreetings();
}