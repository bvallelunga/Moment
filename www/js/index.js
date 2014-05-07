var app = {
    // Application Constructor
    initialize: function() {
        this.eventsAlign();
    },
    eventsAlign: function() {
        setTimeout(function() {
            //Temp until dynamic pulling data
            $("#events .event .hero").vAlign().hAlign();
        }, 100);
    }
};
