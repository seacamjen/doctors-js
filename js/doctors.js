var apiKey = require('./../.env').apiKey;

function Doctor() {
}

var namesArray = [];

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     for (i = 0; i < result.data.length; i ++) {
       namesArray.push({'first_name' : result.data[i].profile.first_name});
     }
      console.log(result.data[0].profile.first_name);
      console.log(result.data[1].profile.first_name);
      console.log(namesArray);
      console.log(namesArray[0].first_name);
      $('#doctorResults').text(namesArray[0].first_name);
    })
   .fail(function(error){
      console.log("fail");
    });
    return namesArray;
};


exports.doctorModule = Doctor;
