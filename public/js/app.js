
let toggleMenu = document.querySelector('#menu-icon');
let navigation = document.querySelector('nav');

toggleMenu.onclick = () => {
    toggleMenu.classList.toggle('fa-times');
    navigation.classList.toggle('active');
}

window.onscroll = () => {
    toggleMenu.classList.remove('fa-times');
    navigation.classList.remove('active');
}

async function sendEmail() {
    // get send button
    const button = document.getElementById('sendEmailButton');
    // get input values
    const inputText = document.getElementById('inputText').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const textEmail = document.getElementById('textEmail').value;
        
    // disabled button
    button.disabled = true;
    // if one of the value is empty, enable button, alert and return
    if (inputText === "" || inputEmail === "" || textEmail === "") {
        button.disabled = false;
        alert("Check your values! Can't send an empty message.");
        return;
    }
    const response = await fetch('/.netlify/functions/email');
    const jsonResp = await response.json();
    alert(JSON.stringify(jsonResp));
    button.disabled = false;
}