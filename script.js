document.addEventListener("DOMContentLoaded", () => {
  const questionsBtn = document.getElementById("questions-btn");

  if (questionsBtn) {
    questionsBtn.addEventListener("click", () => {
      alert("If you have questions, contact me at:\nzasmith523@gmail.com");
    });
  }
});