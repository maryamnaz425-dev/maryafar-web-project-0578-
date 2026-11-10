const contactForm = document.getElementById("contactForm");
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");
const formMessage = document.getElementById("formMessage");

messageInput.addEventListener("input", function() {
  const currentLength = messageInput.value.length;
  charCount.textContent = currentLength + " / 200 characters";
  if (currentLength >= 180) {
    charCount.classList.add("limit-near");
  } 
  else {
    charCount.classList.remove("limit-near");
  }
});

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const userName = document.getElementById("name").value;

  formMessage.textContent = "Thanks, " + userName + "! Your message was received.";
  formMessage.classList.add("show");

  contactForm.reset();
  charCount.textContent = "0 / 200 characters";
  charCount.classList.remove("limit-near");

  setTimeout(function() {
    formMessage.classList.remove("show");
  }, 4000);
});