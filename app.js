console.log("This page is still in developpment, the UI is finished but not the code behind.")

const bouton = document.querySelector("#Login_button")
const usernameInput = document.querySelector("#Username_input")
const passwordInput = document.querySelector("#Password_input")

bouton.addEventListener("click", connect)

function connect(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            let foundUser = false;

            for (const user of users) {
                if (user.Username === username && user.Password === password) {
                    foundUser = true;
                    break;
                }
            }

            if (foundUser) {
                window.location.href = "dashboard.html";
            } else {
                alert("Access Denied");
            }
        })
        .catch(error => {
            console.error('Error while loading the json file:', error);
            alert("An error occurred, please try again later or contact an administrator.");
        });
}

