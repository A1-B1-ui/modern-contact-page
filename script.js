document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from refreshing page

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
    this.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});