let clickCount = 0; // Initialize click count

// DOM elements
const invisibleButton = document.getElementById('invisibleButton');
const loginForm = document.getElementById('loginForm');
const addImageForm = document.getElementById('addImageForm');
const loginFormSubmit = document.getElementById('login');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const imageFormSubmit = document.getElementById('imageForm');
const imageTitleField = document.getElementById('imageTitle');
const imageUploadField = document.getElementById('imageUpload');

// Track the invisible button click count
invisibleButton.addEventListener('click', () => {
  clickCount++;
  console.log(`Invisible button clicked ${clickCount} times`);

  if (clickCount === 3) {
    // Show the login form after 3 clicks
    loginForm.style.display = 'block';
  }
});

// Handle login form submission
loginFormSubmit.addEventListener('submit', function (e) {
  e.preventDefault();

  // Example credentials (you can change these or make them more complex)
  const username = 'admin';
  const password = 'password123';

  // Check credentials
  if (usernameField.value === username && passwordField.value === password) {
    // Successful login
    alert('Login successful!');

    // Hide the login form
    loginForm.style.display = 'none';

    // Show the add image form
    addImageForm.style.display = 'block';
  } else {
    alert('Invalid credentials. Try again!');
  }
});

// Handle add image form submission
imageFormSubmit.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the title and image file
  const title = imageTitleField.value;
  const imageFile = imageUploadField.files[0];

  if (title && imageFile) {
    // Here you would typically upload the image to the server
    // For now, we will just log the details to the console
    console.log('Title:', title);
    console.log('Image:', imageFile);

    // Optionally, clear the form after submission
    imageTitleField.value = '';
    imageUploadField.value = '';
  } else {
    alert('Please provide both title and an image.');
  }
});