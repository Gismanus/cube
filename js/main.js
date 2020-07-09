var preloader = (function() {
    var percentsTotal = 0;
    var preloader = $('.preloader');

    var imgPath = $('*').map(function(ndx, element) {
        var background = $(element).css('background-image');
        var img = $(element).is('img');
        path = '';

        if (background != 'none') {
            path = background;
        }

        if (img) {
            path = $(element).attr('src');
        }
        if (path) return path;
    });



    return {
        init: function () {
            console.log(imgPath);
        }
    }
}());

$(function(){
    preloader.init();
});
