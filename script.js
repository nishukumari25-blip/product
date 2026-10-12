const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".detail-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".detail-tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".detail-panel").forEach((panel) => panel.classList.add("hidden"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.panel).classList.remove("hidden");
  });
});

const offerModal = document.getElementById("offerModal");
document.getElementById("offerButton").addEventListener("click", () => offerModal.classList.remove("hidden"));
document.getElementById("buyButton").addEventListener("click", () => offerModal.classList.remove("hidden"));
document.getElementById("closeModal").addEventListener("click", () => offerModal.classList.add("hidden"));
offerModal.addEventListener("click", (event) => {
  if (event.target === offerModal) offerModal.classList.add("hidden");
});

document.getElementById("offerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get("name");
  const email = data.get("email");
  const offer = Number(data.get("offer")).toLocaleString("en-IN");
  document.getElementById("formMessage").textContent =
    `Demo enquiry prepared for ${name} (₹${offer}). No information has been sent. Please contact Zigguratss to submit your offer.`;
  console.info("Demo enquiry only:", { name, email, offer });
});

const imageModal = document.getElementById("imageModal");
document.getElementById("imageZoom").addEventListener("click", () => imageModal.classList.remove("hidden"));
document.getElementById("closeImage").addEventListener("click", () => imageModal.classList.add("hidden"));
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) imageModal.classList.add("hidden");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    offerModal.classList.add("hidden");
    imageModal.classList.add("hidden");
    nav.classList.remove("open");
  }
});
