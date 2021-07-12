$(document).ready(function(){


// validate //
    $.validator.addMethod("atLeastOneNumber", function (value, element) {
        return this.optional(element) || /[0-9]+/.test(value);
    }, "Must have at least one number");
    
    $('#contactForm').validate({
		rules: {
			"userName": {
				required: false,
                minlength: 6,
                maxlength: 15,
            },
            "fullName": {
                required: true,
                minlength: 3,
                maxlength: 30,
            },
			"email": {
				required: true,
				email: false,
				emailRegex: true,
			},
			"pass": {
                required: true,
                minlength: 6,
                atLeastOneNumber: true,
			},
			"cpass": {
                required: true,
				equalTo: "#pass",
			},
            "address": {
                required: true,

            }

		}
	})

	jQuery.validator.addMethod("emailRegex", function(value, element) {
		var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regEx.test(value);
	}, "Please, enter valid email address!");

	
	$("#contactForm").submit(function() {
        
        var val = $("#contactForm").valid();
        if ( val==false ) {
            
        alert("Please Fill the form Correctly");
        
        return true;
        } else {
        alert("Registration Successfull");
        window.location.href = 'index.html';
        

        return false;
        }
        });
      
        
      function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}  

    
    
});
