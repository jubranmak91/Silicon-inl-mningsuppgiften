const menuBtn = document.querySelector ('.menu-btn')
const mainMenu = document.querySelector ('#main-menu')


const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'

    if(isExpanded) {
        menuBtn.setAttribute('aria-expanded', false)
        mainMenu.addEventListener('animationend', () => {
            mainMenu.classList.add('hide')    
        }, { once: true})  
    }
    
    else {
        mainMenu.classList.remove('hide')
        menuBtn.setAttribute('aria-expanded', true)
        
    }
})


if(hasDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  } else if(hasDarkmode === 'on') {
    enableDarkMode()
  } else if(hasDarkmode === 'off') {
    disableDarkMode()
  }
  
  
  
  darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
      enableDarkMode()
      localStorage.setItem('darkmode', 'on')
    } else {
      disableDarkMode()
      localStorage.setItem('darkmode', 'off')
    }
  })
  
  function enableDarkMode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
  }
  function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
  }