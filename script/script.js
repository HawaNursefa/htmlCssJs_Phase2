document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".faq .btn button");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const answer = this.closest("li").querySelector(".ans");
        if (answer.style.display === "block") {
          answer.style.display = "none";
          this.textContent = "+";
        } else {
          answer.style.display = "block";
          this.textContent = "−";
        }
      });
    });
    const answers = document.querySelectorAll(".faq .ans");
    answers.forEach((ans) => ans.style.display = "none");
  });

  
