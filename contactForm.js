var form = document.querySelector(".pageclip-form");
Pageclip.form(form, {
  onSubmit: function(event) {},
  onResponse: function(error, response) {},
  successTemplate: "<span>Thank you!</span>"
});

var data = {
    name:String,
    email: String,
    phone: Number,
    Message: String
  }
  Pageclip.send('api_Wlrp1zJATYZmhR2X2AmOUjBeJ5rMuTpQ', 'contact', data, function (error, response) {
    console.log('saved?', !!error, '; response:', error || response)
  })