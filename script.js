const subtitle = document.querySelector("#subtitle");

subtitle.textContent = "I am from Borno state"

const button = document.createElement("button");
button.textContent = "click me"
button.style.backgroundColor = "red"
button.style.margin = "0 10px"

const about = document.querySelector("#about");
about.appendChild(button)

button.addEventListener("click", function() {
  const message = document.createElement("p");
  message.textContent = "You have clicked the button";
  about.appendChild(message);
  message.style.color = "green";
  button.style.backgroundColor = "green";

})

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput =  document.querySelector('#email');
const messageInput = document.querySelector('#message');
const sucessMessage = document.createElement('p');
sucessMessage.style.color = "green";
sucessMessage.style.margin = "20px";
sucessMessage.style.fontSize = "18px";

const contactSection = document.querySelector('#contact')

form.addEventListener('submit', function(event){
  event.preventDefault()

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  sucessMessage.textContent = `Hello ${formData.name}, We have recieved your message: ${formData.message}.
                                A response email will be sent to ${formData.email}`
  contactSection.appendChild(sucessMessage);
})