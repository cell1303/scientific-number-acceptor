function validateNumber() {
    let input = document.getElementById("numberInput").value;
    let regex = /^-?\\d+(\\.\\d+)?(e[-+]?\\d+)?$/i;
    let resultText = regex.test(input) ? "Yes, it is a number" : "No, it is not a number";
    document.getElementById("result").innerText = resultText;
}
