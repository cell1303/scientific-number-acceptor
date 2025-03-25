function validateNumber() {
    let input = document.getElementById("numberInput").value.trim();
    
    // Pola regex untuk angka biasa dan scientific notation
    let regex = /^-?\d+(\.\d+)?(e[-+]?\d+)?$/i;
    
    let resultText = regex.test(input) ? "Yes, it is a number" : "No, it is not a number";
    document.getElementById("result").innerText = resultText;
}
