'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('sign-up').reset()
  console.log('signUpSuccess data is:', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  document.getElementById('sign-up').reset()
  console.log('signUpFailure data is:', error)
}
const signInSuccess = function (data) {
  $('#message').text('Signed In Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('sign-in').reset()
  console.log('signInSuccess data is:', data)
  document.getElementById('passw').style.display = 'hidden'
  document.getElementById('sign-out').style.display = 'inline'
  document.getElementById('new-game').style.display = 'inline'
  document.getElementById('game-stats').style.display = 'inline'
  document.getElementById('signUp').style.display = 'none'
  document.getElementById('signIn').style.display = 'none'
  document.getElementById('sign-in').style.visibility = 'hidden'
  document.getElementById('sign-up').style.visibility = 'hidden'
  document.getElementById('change-password').style.visibility = 'visible'
  store.user = data.user
}
const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  document.getElementById('passw').style.display = 'none'
  document.getElementById('sign-out').style.display = 'none'
  document.getElementById('new-game').style.display = 'none'
  console.log('signInFailure data is:', error)
  document.getElementById('sign-in').reset()
}
const changePasswordSuccess = function (data) {
  $('#message2').text('Password changed Successfully')
  $('#message2').removeClass()
  $('#message2').addClass('success')
}
const changePasswordFailure = function (error) {
  $('#message2').text('Failed to change password')
  $('#message2').removeClass()
  $('#message2').addClass('failure')
  console.log('changePassword data is:', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.dash-board').css('visibility', 'hidden')
  document.getElementById('signUp').style.display = 'inline'
  document.getElementById('signIn').style.display = 'inline'
  document.getElementById('sign-in').style.visibility = 'visible'
  document.getElementById('passw').style.display = 'none'
  document.getElementById('sign-out').style.display = 'none'
  document.getElementById('change-password').style.visibility = 'hidden'
  document.getElementById('gameMessage').style.display = 'none'
  document.getElementById('new-game').style.display = 'none'
  document.getElementById('gameStats').style.display = 'none'
  document.getElementById('game-stats').style.display = 'none'
  for (let i = 0; i <= 8; i++) {
    document.getElementById(i).innerHTML = ''
    document.getElementById('gameMessage').innerText = 'Player X turn'
    document.getElementById('sign-in').reset()
  }

  console.log('signOutSuccess data is:', data)
}
const signOutFailure = function (error) {
  document.getElementById('sign-in').reset()
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signOutFailure data is:', error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
