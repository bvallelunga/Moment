var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener("deviceready", this.centerPopup, false);
    },
    centerPopup: function() {
        $("#popup")
            .vAlign()
            .hAlign()
            .fadeIn();
    }
};
