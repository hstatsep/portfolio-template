let ownerName = "jairo Pixabaj"; // update the part BETWEEN the "quotes"
let userName = "jairop2409"; // jairop2409

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
