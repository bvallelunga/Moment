app.pageInitialize = function() {
    this.activatePopup();
};

app.activatePopup = function() {
    $("#popup")
        .vAlign()
        .hAlign();

    setTimeout(function() {
        $("#popup").addClass("visible");
    }, 1000);
}
