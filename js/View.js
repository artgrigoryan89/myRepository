function register(){
    $("#input").css('display','none');
    $("#inputRegister").css('display','block');
};

function login(){
    if(loginFormValidation()){
	$("#input").css("display", "none");
	$("#inputRegister").css("display", "block");
	$("#inputRegister").css("margin", "auto");
	$("#inputRegister").css("float", "left");
	$("#adminPanel").css("display", "block")
    };
	renderActiveUsers();
};


function removeUser(){
	var login = $(event.target).attr("id");
	if(login in activeUsers.users){
		var user = activeUsers.users[login];
		removedUsers.addUser(user);
		activeUsers.removeUser(login);
		renderActiveUsers();
	}
	else{
		removedUsers.removeUser(login);
		renderRemovedUsers();
	};
	
};

function activateUser(){
	var login = $(event.target).attr("id");
	var user = removedUsers.users[login];
	activeUsers.addUser(user);
	removedUsers.removeUser(login);
	renderRemovedUsers();
};

function registerUser(){
	if(registerFormValidation()){
		var name = $("input name=['name']") ;
		var lastName = $("input name=['lname']");
		var login = $("input name=['reguname']");
		var pass = $("input name=['regpsw']");
		var user = new User(name, lastName, login, pass);
		activeUsers.addUser(user);
	};
	renderActiveUsers();
};

