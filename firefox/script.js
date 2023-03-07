$(document).ready(function () {
    setInterval(function () {
        // make emotes coloured and clickable
        $("div[class*='listItems'] div[class*='categorySection'] ul li button").css('filter',' grayscale(0)').children("img").css('pointer-events','all');
        // make stickers coloured and clickable
        $("div[class*='listItems'] div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode']").css('filter',' grayscale(0)').children("div img").css('pointer-events','all');

        //Remove annoying nitro banner that appears when emote is clicked
        $("div[class*='premiumPromo']").remove();
        $("div[class*='upsellWrapper']").remove();
    }, 100);
    setInterval(function () {
        // Add click event listener to the emotes
        $("div[class*='listItems'] div[class*='categorySection'] ul li button img[class*='image']").each(function () {
            if ($(this).attr("affected") != "true") {
                // adding "affected" attribute to prevent duplicaton of click event listeners
                $(this).attr("affected", "true");
                $(this).click((e)=>{
                    let ufsource = e.currentTarget.getAttribute('src');
                    const url = ufsource.split("?size=");
                    source = url[0] + "?size=48"
                    source = source.replace(".webp?", ".png?")

                    // A really bad way to copy image link to clipboard
                    var $temp = jQuery("<input>");
                    jQuery("body").append($temp);
                    $temp.val(source).select();
                    document.execCommand("copy");
                    $temp.remove();
                });
            }
        });
        $("div[class*='listItems'] div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode'] div img[class*='Image']").each(function () {
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
