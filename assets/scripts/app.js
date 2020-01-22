'use strict'

// const clickEvents = require('./events.js')

// NAV LINK CLICKS AND SCROLLS TO DIFFERENT PAGES
// NAV LINK CLICKS AND SCROLLS TO DIFFERENT PAGES

function scrollToAnchor(aid){
  var aTag = $("a[name='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}



// HAMBURGER NAV EVENTS
// HAMBURGER NAV EVENTS

const openNav = () => {
  document.getElementById('burger-menu').style.width = '50%'
}

const closeNav = () => {
  document.getElementById('burger-menu').style.width = '0'
}

// EVENT HANDLERS
// EVENT HANDLERS

const addHandlers = () => {
  // Nav bar scroll to anchor
  $("#home-page-button").click(function() {
    scrollToAnchor('home-page-anchor');
   });
  $("#coffee-page-button").click(function() {
    scrollToAnchor('coffee-page-anchor');
   });
   $("#waffles-page-button").click(function() {
    scrollToAnchor('waffles-page-anchor');
   });
   $("#wine-page-button").click(function() {
    scrollToAnchor('wine-page-anchor');
   });
   $("#press-page-button").click(function() {
    scrollToAnchor('press-page-anchor');
   });
   $("hours-page-button").click(function() {
    scrollToAnchor('hours-page-anchor');
   });

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
  addHandlers()
})
