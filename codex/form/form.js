const form  = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sohamkhanna08@gmail.com",
        Password : "CE96971B703102F1C19C6D545D0E65FFC2E9",
        To : 'sohamkhanna08@gmail.com',
        From : "sohamkhanna08@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
        }
    );
}

// function checkInputs() {
//     const items document.querySelectorAll(".item");
//     for (const item of items) {
//     if (item.value == "") {
//     item.classList.add("error");
//     item.parentElement.classList.add("error");
//     }
//     item.addEventListener("keyup", () => {
//     if (item.value != "") {
//     item.classList.remove("error");
//     item.parentElement.classList.remove("error");
//     }
//     else {
//     item.classList.add("error");
//     item.parentElement.classList.add("error");
//     }
// }
//     });
// }

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    sendEmail();
});
