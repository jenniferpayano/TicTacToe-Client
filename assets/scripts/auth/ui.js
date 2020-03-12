'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess data is:', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure data is:', error)
}
const signInSuccess = function (data) {
  $('#message1').text('Signed In Successfully')
  $('#message1').removeClass()
  $('#message1').addClass('success')
  console.log('signInSuccess data is:', data)
  document.getElementById('passw').style.display = 'inline'
  document.getElementById('sign-out').style.display = 'inline'
  document.getElementById('clearBoard').style.display = 'inline'
  for (let i = 0; i <= 8; i++) {
    document.getElementById('c0' + i).style.pointerEvents = 'auto'
  }
  store.user = data.user
}
const signInFailure = function (error) {
  $('#message1').text('Error on sign in')
  $('#message1').removeClass()
  $('#message1').addClass('failure')
  console.log('signInFailure data is:', error)
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
  $('#message1').text('Signed out Successfully')
  $('#message1').removeClass()
  $('#message1').addClass('success')
  document.getElementById('passw').style.display = 'none'
  document.getElementById('sign-out').style.display = 'none'
  document.getElementById('clearBoard').style.display = 'none'
  for (let i = 0; i <= 8; i++) {
    document.getElementById('c0' + i).style.pointerEvents = 'none'
    document.getElementById('c0' + i).innerHTML = ''
    document.getElementById('gameMessage').innerText = 'Player X turn'
    document.getElementById('sign-in').reset()

  }

  console.log('signOutSuccess data is:', data)
}
const signOutFailure = function (error) {
  $('#message1').text('Error on sign out')
  $('#message1').removeClass()
  $('#message1').addClass('failure')
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
