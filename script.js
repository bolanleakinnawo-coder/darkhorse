// Countdown timer
let remaining = 9 * 60 + 19;

const countdown = document.getElementById("countdown");

function updateCountdown() {
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  countdown.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (remaining > 0) {
    remaining--;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// CTA click -> build tracking URL and redirect
const ctaButton = document.getElementById("ctaButton");

if (ctaButton) {
  ctaButton.addEventListener("click", function (e) {
    e.preventDefault();

    const incomingParams = new URLSearchParams(window.location.search);

    const trackingUrl = new URL(
      "https://thedinator.com/tracker/spots/redirect/rskV4I5U",
    );

    const trackingParams = [
      "pixel",
      "fbclid",
      "campaign_id",
      "adset_id",
      "ad_id",
      "campaign_name",
      "adset_name",
      "ad_name",
      "placement",
      "site_source_name",
      "b",
    ];

    trackingParams.forEach((name) => {
      trackingUrl.searchParams.set(name, incomingParams.get(name) ?? "");
    });

    window.location.href = trackingUrl.toString();
  });
}
