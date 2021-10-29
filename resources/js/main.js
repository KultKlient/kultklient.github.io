(function($) {
  var defaults = {
    images : [
      'resources/images/ez.png'
  ],
    total : 15
  };

  $.firefly = function(settings) {
    $.firefly.settings = $.extend({}, defaults, settings);
      if($.firefly.preloadImages()){
        for (i = 0; i < $.firefly.settings.total; i++){
          $.firefly.fly($.firefly.create($.firefly.settings.images[$.firefly.random(($.firefly.settings.images).length)]));
        }
      }
    return;
  };

  $.firefly.create = function(img){
    spark = $('<img>').attr({'src' : img}).hide();
    $(document.body).append(spark);
      return spark.css({
        'position':'absolute',
        'z-index': $.firefly.random(20),
        top: $.firefly.random(($(window).height()-150)),
        left: $.firefly.random(($(window).width()-150))
        }).show();
}

$.firefly.fly = function(sp) {
  $(sp).animate({
    top: $.firefly.random(($(window).height()-150)),
    left: $.firefly.random(($(window).width()-150))
  }, (($.firefly.random(10) + 5) * 1100),function(){ $.firefly.fly(sp) } );
};

$.firefly.preloadImages = function() {
  var preloads = new Object();
  for (i = 0; i < ($.firefly.settings.images).length; i++){
      preloads[i] = new Image(); preloads[i].src = $.firefly.settings.images[i];
    }
  return true;
}

$.firefly.random = function(max) {
  return Math.ceil(Math.random() * max) - 1;
}

})(jQuery);

window.onload = function() {
  var site = document.getElementById('site').innerHTML;
  var compiled_site = Handlebars.compile(site);
  document.getElementById('site-util').innerHTML = compiled_site();
}

$(document).ready(function() {
	$.firefly({images : ['resources/images/ez.png'],total : 15}); 	
});