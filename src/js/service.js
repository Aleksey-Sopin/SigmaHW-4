"use strict"
// Ресурс с апи постов

const render = document.querySelector('.render-block');
const server = "https://jsonplaceholder.typicode.com/posts";
// 
function creElem(el){
    return document.createElement('div')
}
function addClass(el, clas){
    return el.classList.toggle(clas)
}
function append(parent, el) {
  return parent.appendChild(el);
}
// 
async function loadPosts(count){
    
    render.innerHTML =    `
    <div class="weather__loading">
        <img src="src/images/loading.gif" alt="Loading..." >
    </div>`;
    const server = "https://jsonplaceholder.typicode.com/posts";

    const respons = await fetch(server, {
        method: 'GET',
    });
    // получаем в константу ответ сервера в формате Json
    const responsResult = await respons.json();
    //если пришел ответ,и все ок, запускаем ф-цию  и передаем в нее константу с ответом(json)
    render.innerHTML = ''
    if(respons.ok){
        for (let i = 0; i < count; i++) {
            addPosts(responsResult[i])
        }
    }else{
        // если произошла ошибка, выводим в блок ответ Ошибки
        render.innerHTML = responsResult.message;
    }
}
// function getPosts(data){
//     const title = data.title; 
//     const description = data.body;

//     const template = `
//         <li class="nav-service__view-item">
//             <div class="nav-service__view-icon">
//                 <img src="src/images/our-service/interior.svg" alt="interior">
//             </div>
//             <div class="nav-service__view-context">
//                 <div class="nav-service__view-title">${title}</div>
//                 <div class="nav-service__view-description">${description}</div>
//             </div>
//         </li>`;

//     render.innerHTML = template
// }

function addPosts(responsResult){
    const titleHome ='nav-service__view-title'
    const descHome ='nav-service__view-description'
    const itemHome = 'nav-service__view-item'

    let divTitle = creElem('div')
    addClass( divTitle, titleHome)
    
    let divDesc = creElem('div')
    addClass( divDesc, descHome)

    let cont = creElem('div')
    addClass(cont , 'nav-service__view-context')
    
    let item = creElem('div')
    addClass(item, itemHome)

    divTitle.innerHTML = `${responsResult.title}`
    divDesc.innerHTML = `${responsResult.body}`

    append(cont, divTitle)
    append(cont, divDesc)
    append(item, cont)
    append(render, item)
}
// вызов постов
let count = 3
loadPosts(count)
// 
const arrButtons = document.querySelectorAll('.nav-service__link')


for (const but of arrButtons) {
    let active = true;
    but.addEventListener('click', () => {
        if(but.innerText == 'ALL'){
            count = 3
            loadPosts(count)
        }else if(but.innerText == 'INTERIOR DESIGN'){
            count = 5
            loadPosts(count)
        }else if(but.innerText == 'ARCHITECTURE'){
            count = 7
            loadPosts(count)
        }else if(but.innerText == 'PLANNING'){
            count = 6
            loadPosts(count)
        }
    });
    
    but.addEventListener("click", function() {
        if (active ) {
        but.setAttribute('style',
        'background: white; color: #37806B')
        active = false
        }else {
        but.setAttribute('style',
                    'background: #37806B; color: white')
        active  = true;
    }
    });
}


