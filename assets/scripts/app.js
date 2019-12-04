'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// const clickEvents = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example')
const showHomePage = () => {
  $('#coffee-page').hide(),
  $('#waffles-page').hide(),
  $('#wine-page').hide(),
  $('#press-page').hide(),
  $('#hours-page').hide(),
  $('#home-page').show()
}

const showCoffeePage = () => {
  $('#home-page').hide()
  $('#waffles-page').hide()
  $('#wine-page').hide()
  $('#press-page').hide()
  $('#hours-page').hide()
  $('#coffee-page').show()
}

const showWafflesPage = () => {
  $('#home-page').hide()
  $('#coffee-page').hide()
  $('#wine-page').hide()
  $('#press-page').hide()
  $('#hours-page').hide()
  $('#waffles-page').show()
}

const showWinePage = () => {
  $('#home-page').hide()
  $('#coffee-page').hide()
  $('#waffles-page').hide()
  $('#press-page').hide()
  $('#hours-page').hide()
  $('#wine-page').show()
}

const showPressPage = () => {
  $('#home-page').hide()
  $('#coffee-page').hide()
  $('#waffles-page').hide()
  $('#wine-page').hide()
  $('#hours-page').hide()
  $('#press-page').show()
}

const showHoursPage = () => {
  $('#home-page').hide()
  $('#coffee-page').hide()
  $('#waffles-page').hide()
  $('#wine-page').hide()
  $('#press-page').hide()
  $('#hours-page').show()
}

const addHandlers = () => {
  $('#home-page-button').on('click', showHomePage)
  $('#coffee-page-button').on('click', showCoffeePage)
  $('#waffles-page-button').on('click', showWafflesPage)
  $('#wine-page-button').on('click', showWinePage)
  $('#press-page-button').on('click', showPressPage)
  $('#hours-page-button').on('click', showHoursPage)

}

$(() => {
  // your JS code goes here
  // $('#home-page').show()
  // clickEvents.addHandlers()
  showHomePage()
  addHandlers()
})
