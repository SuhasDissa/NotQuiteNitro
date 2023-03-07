document.addEventListener('DOMContentLoaded', function () {
    var BiggerEmoji = false; // Make emoji look big like stickers
    var UsePng = false;      // Use png instead of webp for high quality

    let emojiCheckbox = document.getElementById('bigemoji');
    let pngCheckbox = document.getElementById('usepng');

    browser.storage.local.get({ BiggerEmoji: false, UsePng: false }).then((result) => {
            BiggerEmoji = result.BiggerEmoji
            emojiCheckbox.checked = BiggerEmoji
            UsePng = result.UsePng
            pngCheckbox.checked = UsePng
        
    });

    emojiCheckbox.addEventListener('click', function () {
        BiggerEmoji = emojiCheckbox.checked;
        browser.storage.local.set({ BiggerEmoji })
    });
    pngCheckbox.addEventListener('click', function () {
        UsePng = pngCheckbox.checked;
        browser.storage.local.set({ UsePng })
    });
});