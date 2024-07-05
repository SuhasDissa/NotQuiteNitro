$(document).ready(function () {
    /*============ Settings ===========*/

    var BiggerEmoji = false; // Make emoji look big like stickers
    var UsePng = false;      // Use png instead of webp for high quality

    browser.storage.local.get({ BiggerEmoji: false, UsePng: false }).then((result) => {
        if (result.BiggerEmoji === true || result.BiggerEmoji === false) {
            BiggerEmoji = result.BiggerEmoji
        }
        if (result.UsePng === true || result.UsePng === false) {
            UsePng = result.UsePng
        }
    });

    /* =============================== */

    setInterval(function () {
        // make emotes coloured and clickable
        $("div[class*='listItems'] div[class*='categorySection'] ul li button").css('filter', ' grayscale(0)').children("img").css('pointer-events', 'all');
        // make stickers coloured and clickable
        $("div[class*='listItems'] div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode']").css('filter', ' grayscale(0)').children("div img").css('pointer-events', 'all');

        //Remove annoying nitro banner that appears when emote is clicked
        $("div[class*='emojiPicker'] div[class*='hasTabParentContainer']").remove();
        $("div[class*='emojiPicker'] div[class*='backdrop'").remove();
    }, 100);

    /*================= Emotes ============================*/
    setInterval(function () {
        // Add click event listener to the emotes
        $("div[class*='listItems'] div[class*='categorySection'] ul li button img[class*='image']").each(function () {
            if ($(this).attr("affected") != "true") {
                // adding "affected" attribute to prevent duplicaton of click event listeners
                $(this).attr("affected", "true");
                $(this).click((e) => {
                    let ufsource = e.currentTarget.getAttribute('src');
                    const url = ufsource.split("?size=");
                    if (BiggerEmoji) {
                        source = url[0] + "?size=48c";
                    } else {
                        source = url[0] + "?size=48";
                    }
                    if (UsePng) {
                        source = source.replace(".webp?", ".png?")
                    }
                    copyTextToClipboard(source)
                });
            }
        });
        /*================= Stickers ============================*/
        $("div[class*='listItems'] div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode'] div img[class*='Image']").each(function () {
            if ($(this).attr("affected") != "true") {
                $(this).attr("affected", "true");
                $(this).click((e) => {
                    let ufsource = e.currentTarget.getAttribute('src');
                    const url = ufsource.split("?size=");
                    source = url[0] + "?size=128"
                    copyTextToClipboard(source)
                });
            }
        });
    }, 1000);
});

async function copyTextToClipboard(textToCopy) {
    try {
        if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(textToCopy);
        }
    } catch (err) {
        console.error(err);
    }
}
