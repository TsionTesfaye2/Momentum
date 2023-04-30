


/*declaring the variable password to be associated with the id name that I set up on the login page */
const password = document.getElementById('password')



/*declaring the variable name to be associated with the id name that I set up on the login page for username */
const name = document.getElementById('username')


/*declaring variable for the actual form */
const form = document.getElementById('form')
/*declaring variable for the error message */
const errorElement = document.getElementById('error')



/*this part of the code presents the form from submitting if there is an error */
/*the event listerner waits for the user input */
form.addEventListener('submit', (e) => {
  let alert = []
  /*if the name input is an empty string or null, this message will appear */
  if (name.value === '' || name.value == null) {
   alert.push('Please insert a name')
  }
    
/*if statement, so if the password is longer than 15 characters, it will push this message */
  if (password.value.length >= 15) {
    alert.push('Please make password less than 15 characters')
  }
    
    
   
/*if statement, so if the password is less than 10 characters, it will push this message */
  if (password.value.length <= 3) {
    alert.push('Please make password longer than 3 characters')
  }

    /*if the user inserts a password the same as their name, the password will be rejected */
    if (password.value === name.value) {
   alert.push('Your password cannot be the same as your name ')
  }  
    
/*this message will be pushed if the user inserts a password that is the same as the word password*/
  if (password.value === 'password') {
    alert.push('Your Password cannot be password ')
  }
    
    
/*if there is more than zero errors, this will stop the form from submitting, each error will be joined with a comma */
  if (alert.length > 0) {
    e.preventDefault()
    errorElement.innerText = alert.join(', ')
  }
})


