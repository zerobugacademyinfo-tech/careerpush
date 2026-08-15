// TODO: replace with your real WhatsApp number in international format, digits only (e.g. "919876543210")
const WHATSAPP_NUMBER = "9750061584";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const experience = document.getElementById("experience").value;
  const targetRole = document.getElementById("targetRole").value.trim();

  const message =
    "Hi, I'd like to join the HireDirect pilot batch.\n\n" +
    "Name: " + fullName + "\n" +
    "Phone: " + phone + "\n" +
    "Experience: " + experience + "\n" +
    "Target role/industry: " + targetRole;

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});
