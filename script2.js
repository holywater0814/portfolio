function toggleDarkMode() {
    var body = document.body;
    var toggleButton = document.querySelector('.toggle-button');
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('active');
  }
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Log the values to the console (you can replace this with actual form handling)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Clear the form
    this.reset();
  });
  
  