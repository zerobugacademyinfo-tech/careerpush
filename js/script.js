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
  const currentRole = document.getElementById("currentRole").value.trim();
  const targetRole = document.getElementById("targetRole").value.trim();
  const location = document.getElementById("location").value.trim();
  const plan = document.getElementById("plan").value;
  const marketingConsent = document.getElementById("marketingConsent").checked ? "Yes" : "No";

  const message =
    "Hi, I'd like to subscribe to CareerPush.\n\n" +
    "Name: " + fullName + "\n" +
    "Phone: " + phone + "\n" +
    "Experience: " + experience + "\n" +
    (currentRole ? "Current role: " + currentRole + "\n" : "") +
    "Target role/industry: " + targetRole + "\n" +
    "Location: " + location + "\n" +
    "Plan: " + plan + "\n" +
    "OK to send updates/offers: " + marketingConsent;

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});
