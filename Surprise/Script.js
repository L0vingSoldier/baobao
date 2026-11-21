let button = document.getElementById("button");
if (button) {
    button.onclick = function() {

    let password = document.getElementById("password").value.toLowerCase();
    let username = document.getElementById("username").value;

    if (username === "Agent_B" && password === "but_potatoes_are_delicious") {
        window.location.href = "Verification_1.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }

    };
}   

let Pin = document.getElementById("Pin")
if (Pin && button) {
    button.onclick = function() {
        if (Pin.value === "117") {
            window.location.href = "BRown.html"
        } else if (Pin.value === "312") {
            window.location.href = "Detective_B.html"        
        } else {
            alert("Incorrect Pin. Please try again")
        }
    }
}

let bday = document.getElementById("bday");
if (bday) {
    bday.onclick = function() {
        let username = document.getElementById("username").value.toLowerCase();
        if (username.toLowerCase() === "yourfavfood"){
            window.location.replace("Birthday.html");
        } else {
            alert('Nuh uh uh')
        }
    }
}

let puzzleButton = document.getElementById("puzzleButton");

if (puzzleButton) {
    puzzleButton.onclick = function() {

        let username = document.getElementById("username").value;
        if (username.toLowerCase() === "potatoes" || username.toLowerCase() === "potato") {
            window.location.replace("Verification_2.html");
        } else if (username === "Blabbit_Pookie-Wookie-Snuggle-Muffin") {
            window.location.replace("Verification_3.html");
        } else if (username === "i_love_you") {
            window.location.replace("Hompage.html");           
        } else {
            window.location.replace("Start.html")
        }
    }
}

let birthday = document.getElementById("birthday");

if (birthday) {
    birthday.onclick = function() {
        window.location.href = "Birthday.html";
    };
}


let LoveButton = document.getElementById("Love-button");

if (LoveButton) {
    LoveButton.onclick = function() {
        alert("I love you reminderrrr!!!");
    };
}

let truth = document.getElementById("Truth");
let enter = document.getElementById("enter");

if (truth && enter) {

    enter.addEventListener("click", function() {

        let answer = truth.value.trim().toLowerCase();

        console.log("Entered:", answer);

        if (answer === "factory") {

            window.location.href = "./final_stretch/Detective_1hnsc1.html";

        } 

        else if (answer === "136") {

            window.location.href = "Detective_2oawdhic9.html";

        } 

        else if (answer === "335") {
            window.location.href = "Detective_3ahm6.html"
        }

        else if (answer === "721") {
            window.location.href = "Detective_4jsdma.html"
        }

        else if (answer === "013") {
            window.location.href = "Detective_5sdma.html"
        }

        else if (answer === "013") {
            window.location.href = "Detective_5sdma.html"
        }

        else if (answer === "435") {
            window.location.href = "Detective_6ddma.html"
        }

        else if (answer === "543") {
            window.location.href = "Detective_7ppwpa.html"
        }

        else if (answer === "519") {
            window.location.href = "Detective_8jwidm.html"
        }

        else if (answer === "921") {
            window.location.href = "Detective_9jwidm.html"
        }

        else if (answer === "136") {
            window.location.href = "Detective_10jjidm.html"
        }

        else if (answer === "117") {
            window.location.href = "Detective_11jjidw.html"
        }
        

        
        else {

            alert("WRONG!!!!");

        }

    });

}
