const verify = () => {
  const input = document.getElementById("loginInput");
  const image = document.getElementById("verification");

  const inputLength = input.value.length;
  const imagePosition = inputLength > 0 ? 5 + inputLength * 8 : 5; // Adjust the multiplier as needed

  image.style.left = `${imagePosition}px`;
  image.style.display = inputLength ? "block" : "none";
};
