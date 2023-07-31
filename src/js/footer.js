const footerDate = new Date()

let dateView = document.querySelector('.date')
if(dateView){
    dateView.innerHTML = footerDate.getFullYear()
}
