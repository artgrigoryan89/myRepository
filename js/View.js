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

};

