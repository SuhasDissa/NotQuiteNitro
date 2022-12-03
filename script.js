$(document).ready(function () {
    setInterval(function () { $("img").attr("draggable", "true"); }, 1000);
    //emotes
    setInterval(function () {
        $("img").css('pointer-events','all');
        $("div[class*='listItems'] div[class*='categorySection'] ul li button").attr("style", "filter: grayscale(0);");
        $("div[class*='premiumPromo']").remove();
    }, 100);
    //stickers
    setInterval(function () {
        $("img").css('pointer-events','all');
        $("div[class*='listItems'] div div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode']").attr("style", "filter: grayscale(0);");
        $("div[class*='upsellWrapper']").remove();
    }, 100);
    //emote-onclick
    setInterval(function () {
        $("div[class*='listItems'] div[class*='categorySection'] ul li button img[class*='image']").each(function () {
            if ($(this).attr("affected") != "true") {
                $(this).attr("affected", "true");
                $(this).click(function (e) {
                    let ufsource = e.currentTarget.getAttribute('src');
                    const url = ufsource.split("?size=");
                    source = url[0] + "?size=48"
                    var $temp = jQuery("<input>");
                    jQuery("body").append($temp);
                    $temp.val(source).select();
                    document.execCommand("copy");
                    $temp.remove();
                });
            }
        });
    }, 1000);
    //sticker-onclick
    setInterval(function () {
        $("div[class*='listItems'] div div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode'] div img[class*='Image']").each(function () {
            if ($(this).attr("affected") != "true") {
                $(this).attr("affected", "true");
                $(this).click(function (e) {
                    let ufsource = e.currentTarget.getAttribute('src');
                    const url = ufsource.split("?size=");
                    source = url[0] + "?size=256"
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
