var app = {
    initialize: function() {
        this.bodyActivate();
        this.bindEvents();

        if(this.pageInitialize) {
            this.pageInitialize();
        }
    },
    bodyActivate: function() {
        $("body").addClass("visible");
    },
    bodyDeactivate: function() {
        $("body").removeClass("visible");
    },
    bindEvents: function() {
        FastClick.attach(document.body);
        $("a").click(this.bodyDeactivate);

        if(this.pageBindEvents) {
            this.pageBindEvents();
        }
    }
};
