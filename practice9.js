// Display the prices of the books you have and only show the ones lower than 200
var bookPrices = [125, 255, 62, 600, 12, 525, 248, 199, 200];
for (i = 0; i < bookPrices.length; i++) {
    var bookPrice = bookPrices[i]
    if (bookPrice >= 200) {
        continue;
    }
    console.log(bookPrice)
}

// continue mean skips the number 
