var app = {
    // Application Constructor
    initialize: function() {
        this.eventsAlign();
    },
    eventsAlign: function() {
        //Temp until dynamic pulling data
        $("#events .event").each(function() {
            var image = $(this).find(".image");
            var img = new Image();

            $(this).find(".hero").vAlign().hAlign();

            img.src = image.data("image");
            img.onload = function() {
                image.css("background-image", "url(" + img.src + ")");

                setTimeout(function() {
                    image.addClass("visible");
                }, 100);
            };
        });
    }
};
