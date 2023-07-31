let progress = document.querySelector('.progress')
let body = document.querySelector('body')

// прогресс прохождения страницы
function progressEngine(pos){
    progress.value = pos / 90
}
// Обработчик скрола
body.addEventListener("scroll", function() {
    progressEngine(this.scrollTop)
})

// ф-ция передвигает Прогресс-Бар в зависимости от нажатой ССылки
// let navProgress = function() {
//     for (const link of arrLinks) {
//         link.addEventListener('click', (e) => {
//             if(e.target.innerText === "HOME"){
//                 progress.value = 9
//             }else if(e.target.innerText === "PROJECT"){
//                 progress.value = 20
//             }else if(e.target.innerText === "SERVICES"){
//                 progress.value = 30
//             }else if(e.target.innerText === "ABOUT"){
//                 progress.value = 40
//             }else if(e.target.innerText === "BLOG"){
//                 progress.value = 50
//             }else if(e.target.innerText === "SHOP"){
//                 progress.value = 60
//             }else if(e.target.innerText === "CONTACT"){
//                 progress.value = 70
//             }
//         })
//     }
    
// }