let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you. Your Form is Submitted!");
});