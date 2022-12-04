$(document).ready(function () {
    //emotes
    setInterval(function () {
        $("img").css('pointer-events','all');
        $("div[class*='listItems'] div[class*='categorySection'] ul li button").css('filter',' grayscale(0)');
        $("div[class*='premiumPromo']").remove();
    //stickers
        $("div[class*='listItems'] div div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode']").css('filter',' grayscale(0)');
        $("div[class*='upsellWrapper']").remove();
    }, 100);
    setInterval(function () {
        //emote-onclick
        $("div[class*='listItems'] div[class*='categorySection'] ul li button img[class*='image']").each(function () {
            if ($(this).attr("affected") != "true") {
                $(this).attr("affected", "true");
                $(this).click((e)=>{
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
        //sticker-onclick
        $("div[class*='listItems'] div div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode'] div img[class*='Image']").each(function () {
            if ($(this).attr("affected") != "true") {
                $(this).attr("affected", "true");
                $(this).click((e)=>{
                    let ufsource = e.currentTarget.getAttribute('src');
                    const url = ufsource.split("?size=");
                    source = url[0] + "?size=128"
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
