var apiKey = require('./../.env').apiKey;

function Doctor() {
}

var namesArray = [];

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     for (i = 0; i < result.data.length; i ++) {
       namesArray.push({'first_name' : result.data[i].profile.first_name}, {'last_name' : result.data[i].profile.last_name}, {'image_url' : result.data[i].profile.image_url});
     }
      namesArray.forEach(function(name){
        console.log(name);
        $('#doctorResults').append("<div class='col-md-3'>" + name.first_name + name.last_name + name.image_url + "</div>");
      })
    })
   .fail(function(error){
      console.log("fail");
    });
    return namesArray;
};


exports.doctorModule = Doctor;
