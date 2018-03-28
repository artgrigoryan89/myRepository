function UsersView(obj, el){
	var elem = $(document).find("#" + el);
	this.createTable(obj, elem);
};

UsersView.prototype.createTable = function(obj, elem){
	elem.find("table").remove();
	var table = $("<table></table>").appendTo(elem);
	var tr = $("<tr></tr>").appendTo(table);
	var array = ["", "User Name", "User Last Name", "User Login", "User Password"];
	$.each(array, function(i) {
    $("<td>").html(array[i]).appendTo(tr);
	});
	var key;
	for(key in obj.users){
		var user = obj.users[key];
		var arr = Object.values(user);
		var tr = $("<tr></tr>").appendTo(table);
		var remBtn = $('<button class="logButton">Remove</button>').appendTo(tr);
		remBtn.attr('id', key);
		remBtn.unbind('click').click(removeUser);
		if(obj.key == "removed"){
			var actBtn = $('<button class="logButton">Activate</button>').appendTo(tr);
			actBtn.attr('id', key);
			actBtn.unbind('click').click(activateUser);
		};
		$.each(arr, function(i) {
		$('<td >').html(arr[i]).appendTo(tr);
		});
	};	
};

function renderActiveUsers(){
	var table = new UsersView(activeUsers, "baseTable");
};

function renderRemovedUsers(){
	var table = new UsersView(removedUsers, "baseTable");
};