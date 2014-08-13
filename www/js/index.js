app.pageInitialize = function() {
    this.facebook.status(function(loggedIn) {
        if(loggedIn) {
            window.location.replace("events.html");
        } else {
            app.activatePopup();
        }
    });
};

app.pageBindEvents = function() {
    $(".button").click(this.activateLogin);
}

app.activatePopup = function() {
    $("#popup")
        .vAlign()
        .hAlign();
}

app.activateLogin = function() {
    var button = $(this);
    var type = $(this).data("key");

    if(type in app) {
        button.addClass("activated");

        app[type].login(function(loggedIn) {
            if(loggedIn) {
                window.location.replace("events.html");
            }

            button.removeClass("activated");
        });
    }
}
