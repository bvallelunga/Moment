app.pageInitialize = function() {
    this.activatePopup();
};

app.pageBindEvents = function() {
    $(".button").click(function() {
        $(this).toggleClass("activated");
        app.activateLogin($(this).data("key"));
    });
}

app.activatePopup = function() {
    $("#popup")
        .vAlign()
        .hAlign();
}

app.activateLogin = function(type) {
    if(type in this) {
        this[type].login();
    }
}
