function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all fields.");
        return;
    }

    window.location.href = "thankyou.html";
}