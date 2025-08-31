/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    if(navToggle) {
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when click on each link navççlink we remove menu display
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>n.addEventListener('click', LinkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //when scroll is greater than 50 viewport height, add blur
    window.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  //when scroll is higher than 350 viewport height, add scroll class to screen,
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 3000,
  delay: 400,
})

sr.reveal('.home__data, .explore__data, .explore__user, .footer__container')
sr.reveal('.home__card',  {delay: 600, distance: '100px', interval: 300})
sr.reveal('.about__data, .join__image',  {origin: 'right'})
sr.reveal('.about__image, .join__data',  {origin: 'left'})
sr.reveal('.popular__card',  {interval: 200})
