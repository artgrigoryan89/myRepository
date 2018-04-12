var User = class{
    constructor(name, lastName, login, pass){
        this.name = name;
        this.lastName = lastName;
        this.login = login;
        this.pass = pass;
    }
};

var UsersModel = class{
    constructor(key){
        this.key = key;
        if (key in localStorage) {
            this.users = JSON.parse(localStorage.getItem(key));
        }
        else {
            var users = {};
            localStorage.setItem(key, JSON.stringify(users));
            this.users = JSON.parse(localStorage.getItem(key));
        }
    }

    addUser(user) {
        if (!(user.login in this.users)) {
            users[user.login] = user;
            localStorage.setItem(this.key, JSON.stringify(users));
        };
    }

    removeUser(login){
        delete this.users[login];
        localStorage.setItem(this.key, JSON.stringify(this.users))
    }

    check(login) {
        if(login in this.users) {
            return true;
        }
        else {
            return false;
        }
    }

    getUser(login, pass){
        let user = this.users[login];
        if (this.check(login) && (pass == user.pass)) {
            return true;
        }
        else {
            return false;
        }
    }
};

var activeUsers = new UsersModel("active");
var removedUsers = new UsersModel("removed");
