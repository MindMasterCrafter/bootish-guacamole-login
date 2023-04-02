var loginButton = document.getElementById('login-button');
var logoutButton = document.getElementById('logout-button');

// Add event listeners for login and logout buttons
loginButton.addEventListener('click', function() {
  // Retrieve email and password values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Store email and password values in localStorage if "Remember me" is checked
  if (document.getElementById('remember-me').checked) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }

  // Redirect to dashboard page
  window.location.href = 'dashboard.html';
});

logoutButton.addEventListener('click', function() {
  // Clear email and password values from localStorage
  localStorage.removeItem('email');
  localStorage.removeItem('password');

  // Redirect to login page
  window.location.href = 'login.html';
});

// Check if email and password are already stored in localStorage
var storedEmail = localStorage.getItem('email');
var storedPassword = localStorage.getItem('password');

if (storedEmail && storedPassword) {
  // Auto-fill email and password fields
  document.getElementById('email').value = storedEmail;
  document.getElementById('password').value = storedPassword;

  // Simulate login button click
  loginButton.click();
}

// Make API request
var accessToken = localStorage.getItem('accessToken');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
