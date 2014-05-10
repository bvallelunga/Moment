var app = {
    initialize: function() {
        this.bindEvents();
        this.activatePopup();
    },
    bindEvents: function() {
        FastClick.attach(document.body);
    },
    activatePopup: function() {
        $("#popup")
            .vAlign()
            .hAlign();

        setTimeout(function() {
            $("#popup").addClass("visible");
        }, 1000);
    }
};
