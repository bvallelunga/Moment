(function($) {
    $.fn.vAlign = function(position) {
    	return this.each(function(i){
        	var h = $(this).height();
        	var mt = h / 2;
        	$(this).css("margin-top", "-" + mt + "px");
        	$(this).css("top", "50%");
        	$(this).css("position", (position) ? position : "absolute");
    	});
    };

    $.fn.hAlign = function(position) {
    	return this.each(function(i){
        	var w = $(this).width();
        	var ml = w / 2;
        	$(this).css("margin-left", "-" + ml + "px");
        	$(this).css("left", "50%");
        	$(this).css("position", (position) ? position : "absolute");
    	});
    };
})(Zepto);
