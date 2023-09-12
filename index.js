  function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    if (name === "") {
      alert("Name must be filled out");
      return false;
    }
    var email = document.forms["contactForm"]["email"].value;
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }
    var message = document.forms["contactForm"]["message"].value;
    if (message === "") {
      alert("Message must be filled out");
      return false;
    }
  }