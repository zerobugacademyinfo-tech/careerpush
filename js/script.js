// TODO: replace with your real WhatsApp number in international format, digits only (e.g. "919876543210")
const WHATSAPP_NUMBER = "919750061584";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".choose-plan-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.getElementById("plan").value = this.dataset.plan;
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const experience = document.getElementById("experience").value;
  const targetRole = document.getElementById("targetRole").value.trim();
  const plan = document.getElementById("plan").value;

  const message =
    "Hi, I'd like to subscribe to CareerPush.\n\n" +
    "Name: " + fullName + "\n" +
    "Phone: " + phone + "\n" +
    "Experience: " + experience + "\n" +
    "Target role/industry: " + targetRole + "\n" +
    "Plan: " + plan;

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});
