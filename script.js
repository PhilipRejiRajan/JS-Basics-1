const colorChangeButton = document.getElementById("color-change-button");
const textInputField = document.getElementById("text-box");
const originalImage = document.getElementById("original-image");
const resetButton = document.getElementById("reset-button");

colorChangeButton.addEventListener("click", () => {
    const changedColor = randomColor();
    document.body.style.backgroundColor = changedColor;
});

const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const newColor = "rgb("+ red +", "+ green +", "+ blue +")";
    return newColor;
};

textInputField.addEventListener("input", () => {
    document.getElementById("text-display-para").textContent = textInputField.value;
});

originalImage.addEventListener("mouseenter", () => {
    document.getElementById("original-image").src = "assets/image2.jpg";
});

originalImage.addEventListener("mouseleave", () => {
    document.getElementById("original-image").src = "assets/image1.jpg";
});

resetButton.addEventListener("click", () => {
    const resetColor = "rgb(255,255,255)";
    document.body.style.backgroundColor = resetColor;
    document.getElementById("text-box").value = '';
    document.getElementById("text-display-para").textContent = '';
});