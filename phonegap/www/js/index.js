app.pageInitialize = function() {
    this.activatePopup();
};

app.activatePopup = function() {
    $("#popup")
        .vAlign()
        .hAlign();
}
