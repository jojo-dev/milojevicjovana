// var email = require('emailjs');

// var server = email.server.connect({
//   user: 'jovanamilojevicofficial@gmail.com',
//   password: 'stackoverflow',
//   host: 'smtp.gmail.com',
//   ssl: true
// });

// server.send({
//   text: 'Hey howdy',
//   from: 'NodeJS',
//   to: 'Wilson <wilson.balderrama@gmail.com>',
//   cc: '',
//   subject: 'Greetings'
// }, function (err, message) {
//   console.log(err || message);
// });





var data = {
    service_id: "gmail",
    template_id: "contactFormMilojevicDesignCV",
    user_id:  "user_Dj0LJWxQ0nlWoFfOXPcDm",
    templateParams = {
        name: document.getElementByName("user_name"),
        email: document.getElementByName("user_email"),
        phone: document.getElementByName("user_phone"),
        message: document.getElementByName("message")
    }
};

$.ajax('https://api.emailjs.com/api/v6.9.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
