// POST https://api.emailjs.com/api/v1.0/email/send-form

$("#myForm").on("submit", function(event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append("service_id", "gmail");
  formData.append("template_id", "YcontactFormMilojevicDesignCV");
  formData.append("user_id", "user_Dj0LJWxQ0nlWoFfOXPcDm");

  $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
    type: "POST",
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  })
    .done(function() {
      alert("Your mail is sent!");
    })
    .fail(function(error) {
      alert("Oops... " + JSON.stringify(error));
    });
});

// var myform = $("form#myform");
// myform.submit(function(event) {
//   event.preventDefault();

//   var params = myform.serializeArray().reduce(function(obj, item) {
//     obj[item.name] = item.value;
//     return obj;
//   }, {});

//   // Change to your service ID, or keep using the default service
//   var service_id = "gmail";

//   var template_id = "contactFormMilojevicDesignCV";
//   myform.find("button").text("Sending...");
//   emailjs.send(service_id, template_id, params).then(
//     function() {
//       alert("Sent!");
//       myform.find("button").text("Send");
//     },
//     function(err) {
//       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//       myform.find("button").text("Send");
//     }
//   );

//   return false;
// });
