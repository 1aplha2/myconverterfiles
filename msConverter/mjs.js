function convert() {
    // Get the input value
    var marla = parseFloat(document.getElementById("marlaInput").value);

    // Check if the input is a valid number
    if (isNaN(marla)) {
        alert("Please enter a valid number for Marla.");
        return;
    }

    // Perform the conversion
    var squareFeet = marla * 225;

    // Display the result
    document.getElementById("result").innerHTML = marla + " Marla is equal to " + squareFeet + " Square Feet.";
}