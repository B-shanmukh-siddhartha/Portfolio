emailjs.init("tbnVEQtYA2zj7F3nl");

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle("hidden");
}

function sendEmail() {

    const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_29j4tdb", "template_vgs33aj", params)
        .then(() => {
            document.getElementById("statusMsg").innerText = "Message Sent Successfully!";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(() => {
            document.getElementById("statusMsg").innerText = "Failed to send message.";
        });
}
