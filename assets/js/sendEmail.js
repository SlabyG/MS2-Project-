//the codes from line 3 to 24 have been added by Tutor Sean from CI in a atempt of fixing the form issue
// My actual codes were commented-out. the actual codes were working fine to up to the commit were i comented the forms are working fine, after that commit forms stop working
const form = document.getElementById('contact-form');
const btn = document.getElementById('button');

form.onsubmit = event => {
  event.preventDefault();

  const data = {
    "last_name": form.last_name.value,
    "first_name": form.first_name.value,
    "tour_name": form.tour_name.value,
    "email": form.email.value,
    "additional_info": form.additional_info.value,
  };

   emailjs.send('default_service', 'slabyg', data)
     .then(() => {
       btn.value = 'Send Email';
       alert('Sent!');
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
     });
     document.getElementById('contact-form').reset();
     return false;
};

// function sendMail(contactForm){
//     document.getElementById('contact-form').reset();
//     emailjs.send("Slabyg","slabyg", {
//         "last_name": contactForm.last_name.value,
//         "first_name": contactForm.first_name.value,
//         "tour_name": contactForm.tour_name.value,
//         "email": contactForm.email.value,
//         "additional_info": contactForm.additional_info.value,
//     })
//     .then(
//         function(response) {
//             console.log("SUCCESS", response);
//         },
//         function(error){
//             console.log("FAILED", error);
//         }
//     );
//     return false;
//   }
//   const btn = document.getElementById('button');

// document.getElementById('contact-form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    const serviceID = 'default_service';
//    const templateID = 'slabyg';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });
  