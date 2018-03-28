var validator = {
	check: function(elem, pattern){
		res = elem.search(pattern);
		if((!elem)||(res == -1)){
			return false;
		}
		else {
			return true;
		}
	},
	
	resetError: function(containerName){
		var container = $(containerName);
		if (container.find("span").attr('class') == "error-message") {
			container.find("span").remove();
		};
	},
	
	showError: function(containerName, errorMessage){
      var container = $(containerName);
      container.append('<span class="error-message"/>');
	  $(".error-message").html(errorMessage);
    },
};

function loginFormValidation(){
	var login = $("input[name='uname']");
    var loginPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var pass = $("input[name='psw']");
	var isValid = true;
    validator.resetError("#uname");
    validator.resetError("#psw");
    if(!(validator.check(login.val(), loginPat))){
        validator.showError("#uname", "Please Insert Corect Login!!!");
		return isValid = false;
    } 
	else{ 
		if(activeUsers.check(login.val())){
			validator.resetError("#uname");
			if(activeUsers.getUser(login.val(), pass.val())){
				return isValid = true;
			} 
			else {
				validator.showError("#psw", "Please Insert Correct Password!!!");
				return isValid = false;
			};
		} 
		else {
			validator.showError("#psw", "Please Register!!!");
			isValid = false;
		}
	};
};

function registerFormValidation(){
	var name = $("input[name='name']");
	var namePat = /[a-z]/;
	var lastName = $("input[name='lname']");
	var lastNamePat = /[a-z]/;
	var login = $("input[name='reguname']");
	var loginPat =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var pass = $("input[name='regpsw']");
	var passPat = /[a-z0-9]/;
	var isValid = true;
	validator.resetError("#name");
    validator.resetError("#uname");
    validator.resetError("#lname");
    validator.resetError("#psw");
	if(!(validator.check(name.val(), namePat))){
        validator.showError("#name", "Please Insert Name!!!");
		isValid = false;
		return isValid;
	};
	if(!(validator.check(lastName.val(), lastNamePat))){
        validator.showError("#lname", "Please Insert Last Name!!!");
		isValid = false;
		return isValid;
	};
	if(!(validator.check(login.val(), loginPat))){
        validator.showError("#uname", "Please Insert Correct Login!!!");
		isValid = false;
		return isValid;
	};
	if(!(validator.check(pass.val(), passPat))){
        validator.showError("#psw", "Please Insert Password!!!");
		isValid = false;
		return isValid;
	};
	return isValid;
};