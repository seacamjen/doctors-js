var Doctor = require('./../js/doctors.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#submitIssue').click(function() {
    var medicalIssue = $('#patientIssue').val();

    var searchDocs = new Doctor();
    var info = searchDocs.getDoctor(medicalIssue);

  });
  $('#submitDocName').click(function() {
    var docName = $('#doctorName').val();

    var searchByDoc = new Doctor();
    var info = searchByDoc.getDoctorName(docName);
  });
});
