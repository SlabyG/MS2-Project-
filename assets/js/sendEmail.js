function sendMail(contactForm){
    emailjs.sendMail("gmail","slabyg", {
        "last_name": contactForm.last_name.value,
        "fist_name": contactForm.fist_name.value,
        "tour_name": contactForm.tour_name.value,
        "email": contactForm.email_add.value,
        "additional_info": contactForm.additional_info.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        }
    );
    return false;
}