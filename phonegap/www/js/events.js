app.pageInitialize = function() {
    this.eventsAlign();
};

app.pageBindEvents = function() {
    $("#header .post").click(this.openLibrary);
};

app.eventsAlign = function() {
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
};

app.openLibrary = function() {
    /*
    navigator.camera.getPicture(function(img) {
         $("#events .event .image")
            .eq(0)
            .css("background-image", "url(data:image/jpeg;base64," + img + ")");
    }, function(error) {
        console.log(error);
    }, {
        quality: 100,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    });
    */

    window.imagePicker.getPictures(
        function(results) {
            for (var i = 0; i < results.length; i++) {
                $("#events .event .image")
                    .eq(i)
                    .css("background-image", "url(" + results[i] + ")");
            }
        }, function (error) {
            alert('Error: ' + error);
        }, {
            maximumImagesCount: 10,
            width: 800,
            quality: 100
        }
    );
}
