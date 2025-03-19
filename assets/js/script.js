// Select all options in both Photography and Projects sections
const photographyOptions = document.querySelectorAll('#photography .option');
const projectsOptions = document.querySelectorAll('#projects .option');

// Select the dynamic text element and body for background change
const dynamicText = document.querySelector('.dynamic-text');
const body = document.body;

// Function to calculate luminance from RGB values
function calculateLuminance(r, g, b) {
  const a = [r, g, b].map(function (v) {
    v /= 255; // Normalize RGB to [0, 1]
    return (v <= 0.03928) ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]; // Standard luminance formula
}

// Function to calculate the contrast ratio and determine text color
function setTextColorBasedOnBackground(bgColor) {
  const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    }
    // 6 digits
    else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return { r, g, b };
  };

  const rgb = hexToRgb(bgColor); // Convert hex color to RGB
  const luminance = calculateLuminance(rgb.r, rgb.g, rgb.b);

  // Set text color based on luminance
  const textColor = luminance > 0.5 ? 'black' : 'white';

  // Apply the text color to h1 and p elements
  const heading = document.querySelector('h1');
  const paragraph = document.querySelectorAll('p');


  heading.style.color = textColor; // Change color of <h1>
  paragraph.forEach(p => p.style.color = textColor); // Change color of all <p> elements
}

// Function to handle hover effects for options
function handleOptionHover(options, defaultText) {
  options.forEach(option => {
    option.addEventListener('mouseenter', () => {
      const bgImage = option.getAttribute('data-bg');
      const text = option.getAttribute('data-text');

      // Change background image and dynamic text
      body.style.backgroundImage = `url(${bgImage})`;
      dynamicText.textContent = text;

      // Set text color based on background color
      setTextColorBasedOnBackground(bgImage);
    });

    option.addEventListener('mouseleave', () => {
      // Reset to default background and text
      body.style.backgroundImage = '';
      dynamicText.textContent = defaultText;

      // Reset text color to default (light color background or neutral)
      setTextColorBasedOnBackground('#f9f7f3'); // Change this to the default background color or a neutral one
    });
  });
}

// Apply hover effect for Photography options
handleOptionHover(photographyOptions, 'Look through some of my best photography work');

// Apply hover effect for Projects options
handleOptionHover(projectsOptions, 'Explore my project portfolio.');

// Select the back button
const backButton = document.getElementById('backButton');
if (backButton) {
  backButton.addEventListener('click', () => {
    window.location.href = 'portfolio.html';
  });
}

const contactButton = document.getElementById('contactButton');
if (contactButton) {
  contactButton.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
}

const aboutButton = document.getElementById('aboutButton');
if (aboutButton) {
  aboutButton.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
}

function replaceProfilePicture(thumbnail) {
  const profilePicture = document.getElementById("profilePicture");
  profilePicture.src = thumbnail.src; // Replace the main image with the thumbnail's source
}

function openModal(img) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById('modalImage');
  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent the form from submitting the traditional way

  // Get form data
  var formData = new FormData(this);

  // Create an XMLHttpRequest to submit the form data asynchronously
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'send_message.php', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      // If successful, display the success message
      document.querySelector('.form-response').innerHTML = xhr.responseText;
    } else {
      // If there's an error, display an error message
      document.querySelector('.form-response').innerHTML = 'Something went wrong. Please try again later.';
    }
  };

  xhr.send(formData);  // Send the form data
});