var UserView  = class{
    setData(obj, elem){
        this.obj = obj;
        this.elem = elem;
    }

    createTable(obj, elem){
        elem.find("table").remove();
        let table = $("<table></table>").appendTo(elem);
        let tr = $("<tr></tr>").appendTo(table);
        let array = ["User Name", "User Last Name", "User Login", "User Password"];
        $.each(array, i => $("<td>").html(array[i]).appendTo(tr));
        var key;
        for (key in obj.users) {
            let user = obj.users[key];
            let arr = Object.values(user);
            let tr = $("<tr></tr>").appendTo(table);
            tr.attr('data-id', key);
            $.each(arr, i => $('<td >').html(arr[i]).appendTo(tr));
        };
    }

    render(){
        let elem =  $(document).find("#" + el);
        this.createTable(this.obj, this.elem);
        this.addButtons();
    }
};

class ActiveUsersView extends UsersView{
    addButtons(){
        let table = $(document).find("table");
        let remBtn = $('<button class="logButton">Remove</button>');
        remBtn.unbind('click').click(this.removeUser.bind(this));
        table.children('tr').append(remBtn);
    }

    removeUser(){
        let login = $(event.target).parent().attr("data-id");
        let user = activeUsers.users[login];
        removedUsers.addUser(user);
        activeUsers.removeUser(user);
        this.render();
    }
}

class RemovedUsersView extends UsersView{
    addButtons() {
        let table = $(document).find("table");
        let remBtn = $('<button class="logButton">Remove</button>');
        remBtn.unbind('click').click(this.removeUser.bind(this));
        let activateBtn = $('<button class="logButton">Activate</button>');
        activateBtn.unbind('click').click(this.activateUser.bind(this));
        table.children('tr').append(remBtn);
        table.children('tr').append(activateBtn);
    }

    removeUser(){
        let login  = $(event.target).parent().attr(data-id);
        let user = removedUsers.users[login];
        removedUsers.removeUser(user);
    }

    activateUser(){
        let login = $(event.target).parent().attr("data-id");
        let user = removedUsers.users[login];
        activeUsers.addUser(user);
        removedUsers.removeUser(login);
        this.render();
    }
}

