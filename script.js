let ownerName = "Your Name"
let username = "bmuellerhstat";

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + username;
document.querySelector("#fork").href = "http://github.com/" + username + "/" + username + ".github.io";
