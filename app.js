

let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}



let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;   
        setTheme(mode);     
    })
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('themeStyle').href = 'default.css'
    }

    if(mode == 'blue') {
        document.getElementById('themeStyle').href = 'blue.css'
    }

    if(mode == 'green') {
        document.getElementById('themeStyle').href = 'green.css'
    }

    if(mode == 'purple') {
        document.getElementById('themeStyle').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}