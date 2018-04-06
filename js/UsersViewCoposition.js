function UsersView(){
    this.render = function() {
        var elem = $(document).find("#" + el);
        this.createTable(this.obj, this.elem);
        this.addButtons();
    };
};

UsersView.prototype.setData = function(obj, elem){
    this.obj = obj;
    this.elem = elem;
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
    };
};

UsersView.prototype.addButtons = function(){

};

function ActiveUsersView() {
    this.view = new UsersView();
    this.view.setData(activeUsers, "baseTable")
};

ActiveUsersView.prototype.addButtons = function () {
    var table = $(document).find("table");
    var remBtn = $('<button class="logButton">Remove</button>');
    remBtn.unbind('click').click(this.removeUser.bind(this));
    table.children('tr').append(remBtn);
};

ActiveUsersView.prototype.removeUser = function(){
    var login = $(event.target).parent().attr("data-id");
    var user = activeUsers.users[login];
    removedUsers.addUser(user);
    activeUsers.removeUser(user);
    this.view.render();
};

function RemovedUsersView() {
   this.view = new UsersView();
   this.view.setData(removedUsers, "baseTable");
};

RemovedUsersView.prototype.addButtons = function () {
    var table = $(document).find("table");
    var remBtn = $('<button class="logButton">Remove</button>');
    remBtn.unbind('click').click(this.removeUser.bind(this));
    var activateBtn = $('<button class="logButton">Activate</button>');
    activateBtn.unbind('click').click(this.activateUser.bind(this));
    table.children('tr').append(remBtn);
    table.children('tr').append(activateBtn);
};

RemovedUsersView.prototype.removeUser = function(){
    var login  = $(event.target).parent().attr(data-id);
    var user = removedUsers.users[login];
    removedUsers.removeUser(user);
};

RemovedUsersView.prototype.activateUser = function() {
    var login = $(event.target).parent().attr("data-id");
    var user = removedUsers.users[login];
    activeUsers.addUser(user);
    removedUsers.removeUser(login);
    this.view.render();
};
