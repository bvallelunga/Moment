var app = {
    initialize: function() {
        this.bindEvents();

        if(this.pageInitialize) {
            this.pageInitialize();
        }
    },
    bindEvents: function() {
        FastClick.attach(document.body);

        if(this.pageBindEvents) {
            this.pageBindEvents();
        }
    }
};
