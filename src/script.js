// TOGGLE NAVBAR
const navbarNav = document.querySelector('.navbar-nav')

document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active')
  e.preventDefault()
}

// TOGGLE SHOPPING CART
const shoppingCart = document.querySelector('.shopping-cart')
document.querySelector('#shopping-cart-btn').onclick = (e) => {
  shoppingCart.classList.toggle('active')
  e.preventDefault()
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
const cartBtn = document.querySelector('#shopping-cart-btn')

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }

  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }

  if (!cartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active')
  }
})
