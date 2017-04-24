var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(medicalIssue, displayByIssue) {
  var namesArray = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     for (i = 0; i < result.data.length; i ++) {
       namesArray.push({
         "doctor" : {
           'first_name' : result.data[i].profile.first_name,
           'last_name' : result.data[i].profile.last_name,
           'image_url' : result.data[i].profile.image_url,
           'address' : result.data[i].practices[0].visit_address.street,
           'zip' : result.data[i].practices[0].visit_address.zip,
           'state' : result.data[i].practices[0].visit_address.state,
           'phone' : result.data[i].practices[0].phones[0].number
         }
       });
     }
     console.log(medicalIssue);
     console.log(namesArray);
     displayByIssue(medicalIssue, namesArray);
    }).fail(function(error){
      $('#doctorResults').text(error.responseJSON.message);
    });
};

Doctor.prototype.getDoctorName = function(docName, displayByDoctorName) {
  var namesArray = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name=' + docName + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     for (i = 0; i < result.data.length; i ++) {

       namesArray.push({
         "doctor" : {
           'first_name' : result.data[i].profile.first_name,
           'last_name' : result.data[i].profile.last_name,
           'image_url' : result.data[i].profile.image_url,
           'address' : result.data[i].practices[0].visit_address.street,
           'zip' : result.data[i].practices[0].visit_address.zip,
           'state' : result.data[i].practices[0].visit_address.state,
           'phone' : result.data[i].practices[0].phones[0].number
         }
       });
     }
     displayByDoctorName(docName, namesArray);
    })
   .fail(function(error){
      $('#doctorResults').text(error.responseJSON.message);
    });
};

exports.doctorModule = Doctor;
