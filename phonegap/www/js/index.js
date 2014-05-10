app.pageInitialize = function() {
    this.activatePopup();
};

app.pageBindEvents = function() {

}

app.activatePopup = function() {
    $("#popup")
        .vAlign()
        .hAlign();
}
