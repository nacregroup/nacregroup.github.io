$(document).ready(function() {
    console.log("start");
    var url = window.location.href;

    if (window.location.hash) {
        url = window.location.href.substring(0, url.indexOf('#'));
    }

    $('.left-side-nav ul a').filter(function() {
        return this.href == url;
    }).find('.left-side-main-li').addClass("active");
});
