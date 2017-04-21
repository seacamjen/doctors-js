var Doctor = require('./../js/doctors.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#submitIssue').click(function() {
    var medicalIssue = $('#patientIssue').val();

    var searchDocs = new Doctor();
    var info = searchDocs.getDoctor(medicalIssue);
  });
});
