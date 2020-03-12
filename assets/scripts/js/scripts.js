function displayForm (c) {
  if (c.value === '1') {
    document.getElementById('sign-up').style.visibility = 'visible'
    document.getElementById('sign-in').style.visibility = 'hidden'
    document.getElementById('change-password').style.visibility = 'hidden'
  } else if (c.value === '2') {
    document.getElementById('sign-in').style.visibility = 'visible'
    document.getElementById('sign-up').style.visibility = 'hidden'
    document.getElementById('change-password').style.visibility = 'hidden'
  } else if (c.value === '3') {
    console.log('3')
    document.getElementById('change-password').style.visibility = 'visible'
    document.getElementById('sign-in').style.visibility = 'hidden'
    document.getElementById('sign-up').style.visibility = 'hidden'
  } else {

  }
}
