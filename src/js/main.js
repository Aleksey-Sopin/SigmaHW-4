
// Функционал для опроса Активности пользователя
let timeout = 1000;
let lastActiveTimestamp = 0;
let userIsActive = false;
let modal = document.createElement('div')

window.addEventListener('mousemove', active);
window.addEventListener('keypress', active);
window.addEventListener('click', active);

setInterval(checkUserIsActive, 60000)
active();

// Create modal window for Question
function createModal(){
    modal.innerHTML = 'Are you here?<p>Click here</p>'
    modal.classList.add('modal')
    document.body.appendChild(modal)
}

function checkUserIsActive() {
    if (userIsActive && new Date().getTime() - lastActiveTimestamp > timeout){
        createModal()
        let click = document.querySelector('.modal p')
            click.addEventListener('click', () =>{
                userIsActive = false;
                modal.style.display = 'none'
            })
            userIsActive = false;
        setTimeout(relocation,5000)
    }
}

function active() {
    lastActiveTimestamp = new Date().getTime();
    if (!userIsActive) {
    userIsActive = true;
    }
}
// console.log("window.close()")
function relocation(){
    if(userIsActive == false){
        console.log("window.close()")
        // window.close()
    }
}

