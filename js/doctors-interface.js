var Doctor = require('./../js/doctors.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#submitIssue').click(function() {
    var medicalIssue = $('#patientIssue').val();
    console.log(medicalIssue);

    var searchDocs = new Doctor();
    var info = searchDocs.getDoctor(medicalIssue);

    Promise.all([info]).then(function(values) {
      $('#doctorResults').text("Here are your results " + info);
    })


  });
});
