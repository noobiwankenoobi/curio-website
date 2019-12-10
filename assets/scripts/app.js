'use strict'

// const clickEvents = require('./events.js')

// NAV LINK CLICKS AND SHOWS DIFFERENT PAGES
// NAV LINK CLICKS AND SHOWS DIFFERENT PAGES

const showHomePage = () => {
  $('.coffee-page').hide()
  $('.waffles-page').hide()
  $('.wine-page').hide()
  $('.press-page').hide()
  $('.hours-page').hide()
  $('.home-page').show()
  closeNav()
}

const showCoffeePage = () => {
  $('.home-page').hide()
  $('.waffles-page').hide()
  $('.wine-page').hide()
  $('.press-page').hide()
  $('.hours-page').hide()
  $('.coffee-page').show()
  closeNav()
}

const showWafflesPage = () => {
  $('.home-page').hide()
  $('.coffee-page').hide()
  $('.wine-page').hide()
  $('.press-page').hide()
  $('.hours-page').hide()
  $('.waffles-page').show()
  closeNav()
}

const showWinePage = () => {
  $('.home-page').hide()
  $('.coffee-page').hide()
  $('.waffles-page').hide()
  $('.press-page').hide()
  $('.hours-page').hide()
  $('.wine-page').show()
  closeNav()
}

const showPressPage = () => {
  $('.home-page').hide()
  $('.coffee-page').hide()
  $('.waffles-page').hide()
  $('.wine-page').hide()
  $('.hours-page').hide()
  $('.press-page').show()
  closeNav()
}

const showHoursPage = () => {
  $('.home-page').hide()
  $('.coffee-page').hide()
  $('.waffles-page').hide()
  $('.wine-page').hide()
  $('.press-page').hide()
  $('.hours-page').show()
  closeNav()
}

// HAMBURGER NAV EVENTS
// HAMBURGER NAV EVENTS

const openNav = () => {
  document.getElementById('burger-menu').style.width = '250px'
}

const closeNav = () => {
  document.getElementById('burger-menu').style.width = '0'
}

// EVENT HANDLERS
// EVENT HANDLERS

const addHandlers = () => {
  // Nav bar link handlers
  $('.home-page-button').on('click', showHomePage)
  $('.coffee-page-button').on('click', showCoffeePage)
  $('.waffles-page-button').on('click', showWafflesPage)
  $('.wine-page-button').on('click', showWinePage)
  $('.press-page-button').on('click', showPressPage)
  $('.hours-page-button').on('click', showHoursPage)
  // Burger menu open/close handlers
  $('.close-btn').on('click', closeNav)
  $('.open-btn').on('click', openNav)
  // Burger menu nav link handlers
  $('.home-page-burger-button').on('click', showHomePage)
  $('.coffee-page-burger-button').on('click', showCoffeePage)
  $('.waffles-page-burger-button').on('click', showWafflesPage)
  $('.wine-page-burger-button').on('click', showWinePage)
  $('.press-page-burger-button').on('click', showPressPage)
  $('.hours-page-burger-button').on('click', showHoursPage)


}

// ON PAGE LOAD
// ON PAGE LOAD

$(() => {
  // clickEvents.addHandlers()
  showHomePage()
  addHandlers()
})
