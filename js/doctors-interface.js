var Doctor = require('./../js/doctors.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#submitIssue').click(function() {
    var medicalIssue = $('#patientIssue').val();
    $('#patientIssue').val("");
    $('#doctorInformation').hide();

    var searchDocs = new Doctor();
    var info = searchDocs.getDoctor(medicalIssue);

  });
  $('#submitDocName').click(function() {
    var docName = $('#doctorName').val();
    $('#doctorName').val("");
    $('#doctorInformation').hide();

    var searchByDoc = new Doctor();
    var info = searchByDoc.getDoctorName(docName);
  });
});
