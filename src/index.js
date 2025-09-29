let userPic = document.getElementById('userImg')

userPic.addEventListener("click", (e) => {
    let dropdownMenu = document.getElementsByClassName('dropdown-user')[0]
    
    if(dropdownMenu.style.display == 'none') {
        dropdownMenu.style.display = 'block'
    }else{
        dropdownMenu.style.display = 'none'
    }
    
})