function sendMail(contactForm){
  emailjs.sendMail("gmail","slabyg", {
      "last_name": contactForm.last_name.value,
      "first_name": contactForm.first_name.value,
      "tour_name": contactForm.tour_name.value,
      "email": contactForm.email.value,
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

const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'slabyg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Sent!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
});