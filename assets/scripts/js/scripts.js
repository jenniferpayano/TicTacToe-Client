'use strict'
// used to display form based on the radio button selection
const displayForm = function (event) {
  if (event.target.value === '1') {
    document.getElementById('sign-up').style.visibility = 'visible'
    document.getElementById('sign-in').style.visibility = 'hidden'
  } else if (event.target.value === '2') {
    document.getElementById('sign-in').style.visibility = 'visible'
    document.getElementById('sign-up').style.visibility = 'hidden'
  } else if (event.target.value === '3') {
    document.getElementById('change-password').style.visibility = 'visible'
    document.getElementById('sign-in').style.visibility = 'hidden'
    document.getElementById('sign-up').style.visibility = 'hidden'
  } else {

  }
}

module.exports = {
  displayForm
}
