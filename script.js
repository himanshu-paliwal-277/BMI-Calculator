let weight_span = document.getElementById("weight_span");
let weight_input = document.getElementById("weight_input");
let height_span = document.getElementById("height_span");
let height_input = document.getElementById("height_input");
let calculate_bmi_button = document.getElementById("calculate_bmi_button");
let bmi_value_span = document.getElementById("bmi_value_span");
let body_type_image = document.getElementById("body_type_image");
let result = document.getElementById("result");
let BMI_value = 0;
let weight = weight_span.innerText;
let height = height_span.innerText;

weight_input.addEventListener("input", function () {
  weight_span.innerText = this.value;
  weight = weight_span.innerText;
});

height_input.addEventListener("input", function () {
  height_span.innerText = this.value;
  height = height_span.innerText;
});

calculate_bmi_button.addEventListener("click", () => {
  BMI_value = (weight * 10000) / (height * height);
  bmi_value_span.innerText = BMI_value.toFixed(1);
  if (BMI_value >= 18.5 && BMI_value <= 25) {
    result.innerText = "Normal";
    body_type_image.src = "./Assets/Normal_Weight_body.png";
  } else if (BMI_value < 18.5) {
    result.innerText = "Under Weight";
    body_type_image.src = "./Assets/Under_weight_body.png";
  } else {
    result.innerText = "Over Weight";
    body_type_image.src = "./Assets/Over_weight_body.png";
  }
});
