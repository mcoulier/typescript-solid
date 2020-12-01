var User = /** @class */ (function () {
    function User() {
        this._password = 'user';
    }
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    User.prototype.getSocialToken = function (token) {
        // return "this will not work";
        return (token === this._socialToken);
    };
    User.prototype.setSocialToken = function (token) {
        this._socialToken = token;
    };
    User.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    User.prototype.resetPassword = function () {
        this._password = prompt('What is your new password?');
    };
    return User;
}());
//admin cannot use google or facebook token
var Admin = /** @class */ (function () {
    function Admin() {
        this._password = 'admin';
    }
    Admin.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    Admin.prototype.resetPassword = function () {
        this._password = prompt('What is your new password?');
    };
    return Admin;
}());
var GoogleBot = /** @class */ (function () {
    function GoogleBot() {
        this._password = 'google';
    }
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    GoogleBot.prototype.getSocialToken = function (token) {
        // return "this will not work";
        return (token === this._socialToken);
    };
    GoogleBot.prototype.setSocialToken = function (token) {
        this._socialToken = token;
    };
    GoogleBot.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    GoogleBot.prototype.resetPassword = function () {
        this._password = prompt('What is your new password?');
    };
    return GoogleBot;
}());
var passwordElement = document.querySelector('#password');
var typePasswordElement = document.querySelector('#typePassword');
var typeGoogleElement = document.querySelector('#typeGoogle');
var typeFacebookElement = document.querySelector('#typeFacebook');
var loginAsAdminElement = document.querySelector('#loginAsAdmin');
var resetPasswordElement = document.querySelector('#resetPassword');
var guest = new User;
var admin = new Admin;
var google = new GoogleBot;
document.querySelector('#login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var user = loginAsAdminElement.checked ? admin : guest;
    if (!loginAsAdminElement.checked && typeGoogleElement.checked) {
        guest.setSocialToken('secret_token_google');
    }
    else if (!loginAsAdminElement.checked && typeFacebookElement.checked) {
        guest.setSocialToken('secret_token_fb');
    }
    debugger;
    var auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = guest.getSocialToken('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = guest.getSocialToken('secret_token_fb');
            break;
    }
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', function (event) {
    event.preventDefault();
    var user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
