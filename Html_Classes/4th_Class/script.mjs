if (localStorage.getItem("session")) {
    window.location.href = "index.html";
}
const check = (event) => {
    event.preventDefault(); // stop the refreshing page after submitting
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const session = { email, password };
    localStorage.setItem("session", JSON.stringify(session));
    console.log("Session saved:", session);
};

document.getElementById("formcontrol").addEventListener("submit", check);

setInterval(() => {
    if (localStorage.getItem("session")) {
        window.location.href = "index.html";
    }
}, 2000);