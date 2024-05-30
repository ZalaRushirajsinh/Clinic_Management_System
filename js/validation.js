function validateForm() {
    var name = document.getElementById("name").value;
    var namePattern = /^[a-zA-Z ]+$/;
  
    if (!namePattern.test(name)) {
      alert("Name should only contain letters and spaces");
      return false;
    }
  
    var email = document.getElementById("email").value;
    var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(email)) {
      alert("Email is invalid");
      return false;
    }
  
    var phone = document.getElementById("phone").value;
    var phonePattern = /^\d{10}$/;
  
    if (!phonePattern.test(phone)) {
      alert("Phone number should be 10 digits");
      return false;
    }
  
    var date = document.getElementById("date").value;
  
    if (date == "") {
      alert("Please select a date");
      return false;
    }
  
    var time = document.getElementById("time").value;
  
    if (time == "") {
      alert("Please select a time");
      return false;
    }
  
    var message = document.getElementById("message").value;
  
    // Continue validating the other inputs
  
    return true;
  }
  
  