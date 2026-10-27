/*
 * SETUP: Replace the placeholder values below with your own details.
 * Keep private API keys and Google credentials out of this public file.
 * n8n production webhook URLs are public endpoints; protect them with validation,
 * rate limiting and appropriate controls before collecting real visitor data.
 */
window.SITE_CONFIG = {
  // Example: "https://your-public-n8n-domain/webhook/website-lead"
  leadWebhookUrl: "https://defog-vessel-hassle.ngrok-free.dev/webhook/website-lead",
  chatWebhookUrl: "https://defog-vessel-hassle.ngrok-free.dev/webhook/website-lead",
  // Use your public Instagram profile URL, e.g. https://www.instagram.com/yourusername/
  instagramUrl: "",
  // Set true only after you have configured the webhook and verified it works.
  enableLiveLeadForm: true,
  enableLiveChat: true
};
