var apiKey = require('./../.env').apiKey;

function Doctor() {
}


Doctor.prototype.getDoctor = function(medicalIssue) {
  var namesArray = [];
  $('#doctorResults').empty();
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
           'state' : result.data[i].practices[0].visit_address.state
         }
       });
     }
      namesArray.forEach(function(name){
        console.log(name);
        $('#doctorResults').append(
          "<div class='col-md-4'>" +
          "<img src='" + name.doctor.image_url + "' alt='Doctors Pictures'>" +
          "<h3>" + name.doctor.first_name + " " + name.doctor.last_name + "</h3>" +
          "<h4>Address: </h4>" +
          "<p>" + name.doctor.address + "<br>" + name.doctor.state + " " + name.doctor.zip + "</p>" +
          "</div>");
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};


exports.doctorModule = Doctor;
