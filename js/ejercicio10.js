function convertirTemperatura() {
    let celsiusInput = document.getElementById('celsius').value;
    let fahrenheitOutput = document.getElementById('fahrenheit');
    
    if (celsiusInput.trim() === "") {
        alert("Por favor, ingresa una temperatura en grados Celsius.");
        return;
    }
    if (isNaN(celsiusInput)) {
        alert("El valor ingresado debe ser numérico.");
        return;
    }
    let celsius = parseFloat(celsiusInput);
    let fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.value = fahrenheit + " °F";
}