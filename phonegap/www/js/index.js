var app = {
    // Application Constructor
    initialize: function() {
        this.eventsAlign();
        this.bindEvents();
    },
    bindEvents: function() {
        $("#header .post").click(this.openCamera);
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
    },
    openCamera: function() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100,
            allowEdit: true,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        });

        function onSuccess(imageData) {
            alert('success because: ' + imageData);
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
};
