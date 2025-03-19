<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Collect and sanitize form data
  $full_name = htmlspecialchars($_POST['full_name']);
  $email = htmlspecialchars($_POST['email']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  // Set the email parameters
  $to = "ivancakadrian@gmail.com"; // Replace with your actual email address
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  // Compose the email body
  $email_body = "<h2>Contact Form Submission</h2>";
  $email_body .= "<p><strong>Name:</strong> " . $full_name . "</p>";
  $email_body .= "<p><strong>Email:</strong> " . $email . "</p>";
  $email_body .= "<p><strong>Subject:</strong> " . $subject . "</p>";
  $email_body .= "<p><strong>Message:</strong></p><p>" . nl2br($message) . "</p>";

  // Send the email
  if (mail($to, $subject, $email_body, $headers)) {
    // Redirect to the same page with a success status
    header("Location: contact.html?status=success");
  } else {
    // Redirect to the same page with an error status
    header("Location: contact.html?status=error");
  }
}
?>