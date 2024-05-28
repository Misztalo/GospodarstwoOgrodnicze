const mobileNav = document.querySelector('.nav-mobile__box')
const mobileNavBurgerBtn = document.querySelector('.burger-btn')
const mobileNavCloseBtn = document.querySelector('.nav-mobile__box-close-btn')
const mobileNavLinks = document.querySelectorAll('.link')
const allSections = document.querySelectorAll('.section')
const navBtnBars = document.querySelector('.burger-btn__bars')
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];



const closeNav = () => {
	mobileNav.classList.remove('active')
	document.body.classList.remove('sticky-items')
}

const showNav = () => {
	mobileNav.classList.add('active')
	document.body.classList.add('sticky-items')

	mobileNavLinks.forEach(link => {
		link.addEventListener('click', () => {
			closeNav()
		})
	})
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('black-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars')
		} else if (!section.classList.contains('black-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars')
		}
	})
}


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

mobileNavBurgerBtn.addEventListener('click', showNav)
mobileNavCloseBtn.addEventListener('click', closeNav)
window.addEventListener('scroll', handleObserver)
