// TOGGLE NAVBAR
const navbarNav = document.querySelector('.navbar-nav')

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active')
}

// TOGGLE SEARCH
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')

document.querySelector('#search-btn').onclick = (e) => {
  searchForm.classList.toggle('active')
  searchBox.focus()
  e.preventDefault()
}

// CLICK OUTSIDE ELEMENT
const hamburger = document.querySelector('#hamburger-menu')
const searchBtn = document.querySelector('#search-btn')

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }

  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }
})
