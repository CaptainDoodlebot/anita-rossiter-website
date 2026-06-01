const form = document.querySelector("#enquiry-form");
const note = document.querySelector("#form-note");

if (form && note) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData);

    note.textContent = "Sending...";
    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send enquiry.");
      }

      form.reset();
      note.textContent = "Thanks. Your enquiry has been sent.";
    } catch (error) {
      note.textContent = "Sorry, something went wrong. Please try again.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}
