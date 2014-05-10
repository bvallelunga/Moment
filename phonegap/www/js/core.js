var app = {
    initialize: function() {
        this.bodyActivate();
        this.bindEvents();
        this.facebook.initialize();

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
    },
    facebook: {
        initialize: function() {
            try {
                FB.init({
                    appId: "290377841130709",
                    nativeInterface: CDV.FB,
                    useCachedDialogs: false
                });
            } catch(error) {
                console.log(error);
            }
        },
        login: function(callback) {
            FB.login(function(response) {
                callback(!!response.authResponse);
            }, {
                scope: "email"
            });
        },
        status: function(callback) {
            FB.getLoginStatus(function(response) {
                callback(!!response.authResponse);
            });
        }
    },
    twitter: {
        login: function() {

        }
    }
};
