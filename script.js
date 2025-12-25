document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyButton");
  const codeBlock = document.getElementById("rcode");

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(codeBlock.textContent);
  });
});