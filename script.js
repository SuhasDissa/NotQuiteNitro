$(document).ready(function () {
    //setInterval(function () { $("img").attr("draggable", "true"); }, 1000);
    setInterval(function () { $("img").attr("style", "pointer-events: all;") }, 1000);
    setInterval(function () {
        $("div[class*='listItems'] div[class*='categorySection'] ul li img[class*='image']").each(function () {
            if ($(this).attr("fuckedup") != "true") {
                $(this).attr("fuckedup","true");
                $(this).click(function (e) {
                    let ufsource = e.currentTarget.getAttribute('src');
                    const url = ufsource.split("?size=");
                    source = url[0] + "?size=64"
                    var $temp = jQuery("<input>");
                    jQuery("body").append($temp);
                    $temp.val(source).select();
                    document.execCommand("copy");
                    $temp.remove();
                });
            }
        });
    }, 1000);
});
