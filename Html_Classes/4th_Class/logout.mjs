if (!localStorage.getItem("session")) {
    window.location.href = "login.html";
}
document.getElementById("logout").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html";
})
setInterval(() => {
    if (!localStorage.getItem("session")) {
        window.location.href = "login.html";
    }
}, 3000);