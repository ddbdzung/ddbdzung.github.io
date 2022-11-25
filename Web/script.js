const navhome = document.getElementById('nav-home')
const navHeight = navhome.getBoundingClientRect().height

// Active navlink onScroll event
const headerSection = document.getElementById('home')
const aboutSection = document.getElementById('about')
const serviceSection = document.getElementById('services')
const portfolioSection = document.getElementById('portfolio')
const contactSection = document.getElementById('contact')

const about_link = document.getElementById('about_link')
const services_link = document.getElementById('services_link')
const portfolio_link = document.getElementById('portfolio_link')
const contact_link = document.getElementById('contact_link')

const headerLocale = headerSection.getBoundingClientRect()
const aboutLocale = aboutSection.getBoundingClientRect()
const serviceLocale = serviceSection.getBoundingClientRect()

const headerScrollY = 0
const aboutScrollY = headerLocale.height
const serviceScrollY = aboutScrollY + aboutLocale.height
const portfolioScrollY = serviceScrollY + serviceLocale.height
const portfolioHeight = portfolioSection.offsetHeight || 312
const contactScrollY = contactSection.offsetTop + portfolioHeight

let scrollArr = [aboutScrollY, serviceScrollY, portfolioScrollY, contactScrollY]
// Exclude nav height
scrollArr = scrollArr.map(item => item - navHeight)

const navNameArr = ['about_link', 'services_link', 'portfolio_link', 'contact_link']
let statusNavArr = navNameArr.map(item => ({ isActive: false, element: document.getElementById(item) }))

// Smoothify scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const setActiveNav = idx => {
  statusNavArr = statusNavArr.map(item => {
    if (item.isActive === true) {
      item.isActive = false
      item.element.classList.remove('navlink-active')
    }

    return item
  })
  statusNavArr[idx].isActive = true
  statusNavArr[idx].element.classList.add('navlink-active')
}

const unsetActiveNav = () => {
  statusNavArr = statusNavArr.map(item => {
    if (item.isActive === true) {
      item.element.classList.remove('navlink-active')
      item.isActive = false
    }

    return item
  })
}

window.addEventListener("scroll", function (event) {
  let XPoint = this.scrollX
  let YPoint = this.scrollY

  // Handle change navlink when scrollY point change
  if (0 <= YPoint && YPoint < scrollArr[0]) {
    unsetActiveNav()
  } else if (scrollArr[0] <= YPoint && YPoint < scrollArr[1]) {
    setActiveNav(0)
  } else if (scrollArr[1] <= YPoint && YPoint < scrollArr[2]) {
    setActiveNav(1)
  } else if (scrollArr[2] <= YPoint && YPoint < scrollArr[3]) {
    setActiveNav(2)
  } else if (scrollArr[3] <= YPoint) {
    setActiveNav(3)
  }

  // Handle change color header when scrolling
  if (YPoint > 0) {
    navhome.classList.remove('NAV_ONTOP')
    navhome.classList.add('NAV_SCROLL')
  } else if (YPoint === 0) {
    navhome.classList.add('NAV_ONTOP')
    navhome.classList.remove('NAV_SCROLL')
  }
}, false);

// Add onchange animation for input
const fullnameInput = document.getElementById('fullname')
fullnameInput.addEventListener('change', e => {
  if (fullnameInput.value !== '') {
    document.getElementById('fullname').classList.add('inp-focus')
    document.getElementById('fullname-label').classList.add('label-focus')
  } else {
    document.getElementById('fullname').classList.remove('inp-focus')
    document.getElementById('fullname-label').classList.remove('label-focus')
  }
})
const emailInput = document.getElementById('email')
emailInput.addEventListener('change', e => {
  if (emailInput.value !== '') {
    document.getElementById('email').classList.add('inp-focus')
    document.getElementById('email-label').classList.add('label-focus')
  } else {
    document.getElementById('email').classList.remove('inp-focus')
    document.getElementById('email-label').classList.remove('label-focus')
  }
})
const phonenumberInput = document.getElementById('phonenumber')
phonenumber.addEventListener('change', e => {
  if (phonenumberInput.value !== '') {
    document.getElementById('phonenumber').classList.add('inp-focus')
    document.getElementById('phonenumber-label').classList.add('label-focus')
  } else {
    document.getElementById('phonenumber').classList.remove('inp-focus')
    document.getElementById('phonenumber-label').classList.remove('label-focus')
  }
})

// Add onchange animation for textarea
const messageTextarea = document.getElementById('message')
messageTextarea.addEventListener('change', e => {
  if (messageTextarea.value !== '') {
    document.getElementById('message').classList.add('inp-focus')
    document.getElementById('message-label').classList.add('label-focus')
  } else {
    document.getElementById('message').classList.remove('inp-focus')
    document.getElementById('message-label').classList.remove('label-focus')
  }
})
