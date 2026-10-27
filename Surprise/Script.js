let button = document.getElementById("button");
if (button) {
    button.onclick = function() {

    let password = document.getElementById("password").value.toLowerCase();
    let username = document.getElementById("username").value;

    if (username === "Agent_B" && password === "but_potatos_are_delicious") {
        window.location.href = "Verification_1.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }

    };
}   

let Pin = document.getElementById("Pin")
if (Pin) {
    button.onclick = function() {
        if (Pin === 117) {
            window.location.href = "BRown.html"
        } else {
            alert("Incorrect Pin. Please try again")
        }
    }
}



let verifyButton = document.getElementById("verifyButton");

if (verifyButton) {
    verifyButton.onclick = function() {

        let username = document.getElementById("username").value;
        if (username.toLowerCase() === "potatos" || username.toLowerCase() === "potato") {
            window.location.replace("Verification_2.html");
        } else if (username === "Blabbit_Pookie-Dookie-Snuggle-Muffin") {
            window.location.replace("Verification_3.html");
        } else if (username === "I_love_you") {
            window.location.replace("Hompage")
        } else if (username === "wrest") {
            
        } else {
            window.location.replace("index.html")
        }
    }
}



let LoveButton = document.getElementById("Love-button");

if (LoveButton) {
    LoveButton.onclick = function() {
        alert("I love you reminderrrr!!!");
    };
}

const unlockButton = document.getElementById("unlockButton");

if (unlockButton) {
    unlockButton.onclick = function () {
        const code = document.getElementById("accessCode").value;

        if (code === "mirror27") {
            document.getElementById("message").textContent =
                "Access granted.";

            document.getElementById("downloadLink").hidden = false;
        } else {
            document.getElementById("message").textContent =
                "Incorrect code.";
        }
    };
}
