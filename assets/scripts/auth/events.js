const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing Up!')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signing in!')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Changing Password')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('Sign Out')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
