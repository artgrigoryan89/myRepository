function UsersView(obj, el) {
    this.render = function() {
        var elem = $(document).find("#" + el);
        this.createTable(obj, elem);
        this.addButtons();
    }
};

UsersView.prototype.createTable = function (obj, elem) {
    elem.find("table").remove();
    var table = $("<table></table>").appendTo(elem);
    var tr = $("<tr></tr>").appendTo(table);
    var array = ["User Name", "User Last Name", "User Login", "User Password"];
    $.each(array, function (i) {
        $("<td>").html(array[i]).appendTo(tr);
    });
    var key;
    for (key in obj.users) {
        var user = obj.users[key];
        var arr = Object.values(user);
        var tr = $("<tr></tr>").appendTo(table);
        tr.attr('data-id', key);
        $.each(arr, function (i) {
            $('<td >').html(arr[i]).appendTo(tr);
        });
    }
    ;
};

UsersView.prototype.removeUser = function () {
    var login = $(event.target).parent().attr("data-id");
    if (login in activeUsers.users) {
        var user = activeUsers.users[login];
        removedUsers.addUser(user);
        activeUsers.removeUser(login);
        this.render();
    }
    else {
        removedUsers.removeUser(login);
        this.render();
    };
};

UsersView.prototype.activateUser = function() {
    var login = $(event.target).parent().attr("data-id");
    var user = removedUsers.users[login];
    activeUsers.addUser(user);
    removedUsers.removeUser(login);
    this.render();
};

UsersView.prototype.addButtons = function(){

};

function ActiveUsersView() {

};

ActiveUsersView.prototype = new UsersView(activeUsers, "baseTable");

ActiveUsersView.prototype.addButtons = function () {
    var table = $(document).find("table");
    var remBtn = $('<button class="logButton">Remove</button>');
    remBtn.unbind('click').click(this.removeUser.bind(this));
    table.children('tr').append(remBtn);
};

function RemovedUsersView() {

};

RemovedUsersView.prototype = new UsersView(removedUsers, "baseTable");

RemovedUsersView.prototype.addButtons = function () {
    var table = $(document).find("table");
    var remBtn = $('<button class="logButton">Remove</button>');
    remBtn.unbind('click').click(this.removeUser.bind(this));
    var activateBtn = $('<button class="logButton">Activate</button>');
    activateBtn.unbind('click').click(this.activateUser.bind(this));
    table.children('tr').append(remBtn);
    table.children('tr').append(activateBtn);
};

var activeUsersView = new ActiveUsersView();
var removedUsersView = new RemovedUsersView();