function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_tz7b0sj","template_38rgj0s", parms).then(alert("Email Sent Sucessfully!!!"))
}