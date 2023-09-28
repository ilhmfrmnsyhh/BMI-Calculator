document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const bmiResultElement = document.getElementById("bmiResult");

    calculateButton.addEventListener("click", function () {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmi = weight / Math.pow(height / 100, 2);
            const bmiCategory = getBmiCategory(bmi);
            bmiResultElement.textContent = `BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
        } else {
            bmiResultElement.textContent = "Masukkan berat badan dan tinggi badan yang valid.";
        }
    });

    function getBmiCategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Normal Weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            return "Overweight";
        } else {
            return "Obesity";
        }
    }
});
