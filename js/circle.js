const text = document.querySelector(".contact-text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style='transform:rotate(${i * 18}deg)'>${char}</span>`
  )
  .join("");
