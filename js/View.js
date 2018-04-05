function register() {
    $("#input").css('display', 'none');
    $("#inputRegister").css('display', 'block');
};

function login() {
    if (loginFormValidation()) {
        $("#input").css("display", "none");
        $("#inputRegister").css("display", "block");
        $("#inputRegister").css("margin", "auto");
        $("#inputRegister").css("float", "left");
        $("#adminPanel").css("display", "block")
    };
    activeUsersView.render();
};

function registerUser() {
    if (registerFormValidation()) {
        var name =  $("input[name='name']").val();
        var lastName = $("input[name='lname']").val();
        var login = $("input[name='reguname']").val();
        var pass = $("input[name='regpsw']").val();
        var user = new User(name, lastName, login, pass);
        activeUsers.addUser(user);
    };
    activeUsersView.render();
};
