let userPic = document.getElementById('userImg')

userPic.addEventListener("click", (e) => {
    let dropdownMenu = document.getElementsByClassName('dropdown-user')[0]
    
    if(dropdownMenu.style.display == 'none') {
        dropdownMenu.style.display = 'block'

        /* função de click nas opções do menu */
        let userConfig = document.getElementById('dropdown-option1')
        let themeConfig = document.getElementById('dropdown-option2')

        userConfig.addEventListener("click", (e) => {
            console.log('UserConfig')
        })

        themeConfig.addEventListener("click", (e) => {
            console.log('ThemeConfig')
        })
    }else{
        dropdownMenu.style.display = 'none'
    }  
})