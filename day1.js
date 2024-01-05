//first and last digit as a string
//if only one digit, read twice
//add string together
//change string back to number and store it in an array
//sum all numbers

document.addEventListener("DOMContentLoaded", function () {
    // Get the content of the HTML element
    var contentElement = document.getElementById("content");
    var content = contentElement.textContent.trim();

    // Split the content into an array using new line as the delimiter
    var lines = content.trim().split("\n");

    // Iterate through the array and process each line
    for (var i = 0; i < lines.length; i++) {
        // Do something with each line (for example, log it to the console)
        console.log("Line " + (i + 1) + ": " + lines[i]);
    }

    function partOne() {
        const values = lines.map((line) => {
            let first = line.split('').find((v) => !Number.isNaN(Number(v)));
            let last = line.split('').findLast((v) => !Number.isNaN(Number(v)));
            return Number(first + last);
        });

        return values.reduce((s, v) => s + v, 0);
    }

    const totalSum = partOne();
    console.log("Total Sum:", totalSum);
});