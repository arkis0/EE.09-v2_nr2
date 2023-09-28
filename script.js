function countDPS() {
    const name = document.getElementById("name").value;
    const level = parseInt(document.getElementById("level").value);
    const time = parseFloat(document.getElementById("time").value);
    const damage = parseFloat(document.getElementById("damage").value);

    if (isNaN(level) || isNaN(time) || isNaN(damage)) {
        alert("Wprowadź poprawne dane.");
        return;
    }

    const dps = (damage * time) / level;

    const result = document.getElementById("result");
    result.innerHTML = `DPS postaci ${name} to: ${dps.toFixed(2)}`;
}