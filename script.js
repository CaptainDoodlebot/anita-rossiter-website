const form = document.querySelector("#enquiry-form");
const note = document.querySelector("#form-note");

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    note.textContent = "Thanks. This enquiry form will be connected before the site goes live.";
  });
}
