function User(name, lastName, login, pass){
	this.name = name;
	this.lastName = lastName;
	this.login = login;
	this.pass = pass;
};

function UsersModel(key){
	this.key = key;
	if(key in localStorage){
		this.users = JSON.parse(localStorage.getItem(key));
	}
	else{
		var users = {};
		localStorage.setItem(key, JSON.stringify(users));
		this.users = JSON.parse(localStorage.getItem(key));
	}
};

UsersModel.prototype.addUser = function(user){
	var users = this.users;
	if(!(user.login in this.users)){
		users[user.login] = user;
		localStorage.setItem(this.key, JSON.stringify(users));
	};
};

UsersModel.prototype.removeUser = function(login){
	var users = this.users;
	delete users[login];
	localStorage.setItem(this.key, JSON.stringify(users))
};

UsersModel.prototype.check = function(login){
	var users = this.users;
	if(login in users){
		return true;
	}
	else{
		return false;
	}
};

UsersModel.prototype.getUser = function(login, pass){
	var users = this.users;
	var user = users[login];
	if(this.check(login) && (pass == user.pass)){
		return true;
	}
	else{
		return false;
	}
};
		
		
var activeUsers = new UsersModel("active");
var removedUsers = new UsersModel("removed");		
	