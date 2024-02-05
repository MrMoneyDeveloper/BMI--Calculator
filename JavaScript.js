function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var errorMessage = document.getElementById("error-message");
    var bmiIcon = document.getElementById("bmi-icon");

    if (weight === "" || height === "") {
        errorMessage.innerHTML = "Please enter both weight and height.";
        errorMessage.style.display = "block";
        bmiIcon.innerHTML = ""; // Clear BMI icon
        return;
    }


    // Reset and hide the error message if both weight and height are entered
    errorMessage.innerHTML = "";
    errorMessage.style.display = "none";
    bmiIcon.innerHTML = "";

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    var result = document.getElementById("result");
    result.innerHTML = "Your BMI is: " + bmi;

    if (bmi < 18.5) {
        result.innerHTML += "<br>Underweight";
        bmiIcon.innerHTML = "🏋️"; // Icon for underweight
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML += "<br>Normal weight";
        bmiIcon.innerHTML = "😊"; // Icon for normal weight
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML += "<br>Overweight";
        bmiIcon.innerHTML = "🤔"; // Icon for overweight
    } else {
        result.innerHTML += "<br>Obese";
        bmiIcon.innerHTML = "😱"; // Icon for obese
    }
}
