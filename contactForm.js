var data = {
  name: String,
  email: String,
  phone: Number,
  Message: String
};
var form = document.querySelector(".pageclip-form");
Pageclip.form(form, {
  onSubmit: function(event) {},
  onResponse: function(error, response) {},
  successTemplate: "<span>Thank you!</span>"
});

Pageclip.send(
  "api_Wlrp1zJATYZmhR2X2AmOUjBeJ5rMuTpQ",
  "jovanamilojevicofficial@gmail.com",
  data,
  function(error, response) {
    console.log("saved?", !!error, "; response:", error || response);
  }
);

(function() {
  emailjs.init("user_Dj0LJWxQ0nlWoFfOXPcDm");
})();
