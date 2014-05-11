window.app = window.app || {};

app.initialize = function() {
    this.bindEvents();
    this.bodyActivate();
}

app.handle = function(next) {
    return function(data) {
        app[next](data);
    }
}

app.changePage = function(link) {
    app.bodyDeactivate();

    setTimeout(function() {
        window.location.replace(link);
    }, 500);
}

app.bindEvents = function() {
    FastClick.attach(document.body);

    $(window).unload(this.bodyDeactivate);

    document.addEventListener("deviceready", this.handle("deviceReady"), false);
}

app.deviceReady = function() {
    this.facebook.initialize();
    this.twitter.initialize();

    if(this.pageInitialize) {
        this.pageInitialize();
    }

    if(this.pageBindEvents) {
        this.pageBindEvents();
    }
}

app.bodyActivate = function() {
    $("body").addClass("visible");
}

app.bodyDeactivate = function() {
    $("body").removeClass("visible");
}

app.facebook = {
    initialize: function() {
        try {
            FB.init({
                version: 'v2.0',
                appId: "290377841130709",
                nativeInterface: CDV.FB,
                useCachedDialogs: false,
                cookie: true,
                status: false,
            });
        } catch(error) {
            console.log(error);
        }
    },
    login: function(callback) {
        FB.login(function(response) {
            console.log(response);
            callback(response.status == "connected");
        }, {
            scope: "user_friends"
        });
    },
    logout: function(callback) {
        FB.logout(callback);
    },
    status: function(callback) {
        FB.getLoginStatus(function(response) {
            callback(response.status == "connected");
        });
    }
}

app.twitter = {
    initialize: function() {

    },
    login: function() {

    }
}

window.onerror = function(message, url, linenumber) {
    if(message && linenumber) {
        console.error("JavaScript error: " + message + " on line " + linenumber + " for " + url);
    }
}
