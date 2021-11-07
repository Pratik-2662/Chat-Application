


const userName = prompt("Enter your Name").toUpperCase();
const form = document.getElementById("send-container");
let messageContainer = document.querySelector(".container");
let append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}
append(`${userName} joined the Chat`, "center");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMessage = messageInp.value;
    function capitalizeTheFirstLetterOfEachWord(message) {
        let separateMessage = message.toLowerCase().split(' ');
        for (let i = 0; i < separateMessage.length; i++) {
            separateMessage[i] = separateMessage[i].charAt(0).toUpperCase() +
                separateMessage[i].substring(1);
        }
        return separateMessage.join(' ');
    }
    // const newMessage = capitalizeTheFirstLetterOfEachWord(message);
    if (!newMessage == "") {
        append(`You: ${newMessage}`, "right");
        messageInp.value = '';
        append(`Pratik:  ${newMessage}`, "left");
    }
})



