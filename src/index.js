const lables = document.querySelectorAll(".form-control label");

lables.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map((char, idx) => {
      return `<span style="transition-delay: ${idx * 40}ms" >${char}</span>`;
    })
    .join("");
});
