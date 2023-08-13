function convert() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const tempUnit = document.getElementById("tempUnit").value;
    let result = "";

    if (tempUnit === "celsius") {
        const fahrenheit = (inputTemp * 9/5) + 32;
        result = `${inputTemp}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (inputTemp - 32) * 5/9;
        result = `${inputTemp}°F is ${celsius.toFixed(2)}°C`;
    }

    document.getElementById("result").textContent = result;
}
