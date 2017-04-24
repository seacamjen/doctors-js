var Doctor = require('./../js/doctors.js').doctorModule;
var apiKey = require('./../.env').apiKey;

var displayByIssue = function(medicalIssue, namesArray) {
  $('#doctorResults').empty();
  namesArray.forEach(function(name){
    $('#doctorResults').append(
      "<div class='col-md-3'>" +
      "<img src='" + name.doctor.image_url + "' alt='Doctors Pictures'>" +
      "<h3>" + name.doctor.first_name + " " + name.doctor.last_name + "</h3>" +
      "<br>" + "<h4>Phone: </h4>" + name.doctor.phone +
      "<h4>Address: </h4>" +
      "<p>" + name.doctor.address + "<br>" + name.doctor.state + " " + name.doctor.zip + "</p>" +
      "</div>");
    });
  }

var displayByDoctorName = function(medicalIssue, namesArray) {
  $('#doctorResults').empty();
  namesArray.forEach(function(name){
    $('#doctorResults').append(
      "<div class='col-md-3'>" +
      "<img src='" + name.doctor.image_url + "' alt='Doctors Pictures'>" +
      "<h3>" + name.doctor.first_name + " " + name.doctor.last_name + "</h3>" +
      "<br>" + "<h4>Phone: </h4>" + name.doctor.phone +
      "<h4>Address: </h4>" +
      "<p>" + name.doctor.address + "<br>" + name.doctor.state + " " + name.doctor.zip + "</p>" +
      "</div>");
  });
}

$(document).ready(function () {
  $('#submitIssue').click(function() {
    var medicalIssue = $('#patientIssue').val();
    $('#patientIssue').val("");
    $('#doctorInformation').hide();

    var searchDocs = new Doctor();
    searchDocs.getDoctor(medicalIssue, displayByIssue);
  });
  
  $('#submitDocName').click(function() {
    var docName = $('#doctorName').val();
    $('#doctorName').val("");
    $('#doctorInformation').hide();

    var searchByDoc = new Doctor();
    searchByDoc.getDoctorName(docName, displayByDoctorName);
  });
});
