// Typewriter effect: cycles through multiple roles
const occupationRoles = ["Frontend Developer", "Digital Forensics Enthusiast", "UI/UX Designer"];
let occupationRoleIndex = 0;
let occupationCharIndex = 0;
let occupationDeleting = false;

function typeOccupation(){
    const el = document.getElementById("occupation");
    if (!el) return;

    const current = occupationRoles[occupationRoleIndex];

    if (!occupationDeleting) {
        occupationCharIndex++;
        el.textContent = current.slice(0, occupationCharIndex);
        if (occupationCharIndex === current.length) {
            occupationDeleting = true;
            setTimeout(typeOccupation, 1500); // pause before deleting
            return;
        }
    } else {
        occupationCharIndex--;
        el.textContent = current.slice(0, occupationCharIndex);
        if (occupationCharIndex === 0) {
            occupationDeleting = false;
            occupationRoleIndex = (occupationRoleIndex + 1) % occupationRoles.length;
        }
    }

    setTimeout(typeOccupation, occupationDeleting ? 40 : 90);
}

document.addEventListener("DOMContentLoaded", typeOccupation);

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_tz7b0sj","template_38rgj0s", parms).then(alert("Email Sent Sucessfully!!!"))
}
