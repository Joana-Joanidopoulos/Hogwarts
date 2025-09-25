(function () {
  const qs = new URLSearchParams(window.location.search);
  const $ = (s) => document.querySelector(s);

  // Basic HTML escape to avoid injection in personalized fields
  const esc = (s = "") =>
    s.toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

  // Map URL params to fields with sensible defaults
  const data = {
    name: esc(qs.get("name") || "Hexe/Zauberer"),
    event: esc(qs.get("event") || "Butterbier & Beats"),
    date: esc(qs.get("date") || "31.10.2025"),
    time: esc(qs.get("time") || "19:00 Uhr"),
    location: esc(qs.get("location") || "Hauptstraße 40"),
    details: esc(qs.get("details") || ""),
  };

  function populate() {
    // Text placeholders in the letter
    const nameEl = $("#recipientName");
    const dateEl = $("#eventDate");
    const mottoEl = $("#eventTime"); // we treat 'event' as the visible motto/title
    const locEl = $("#eventLocation");
    const dressEl = $("#eventDress");

    if (nameEl) nameEl.textContent = data.name;
    if (dateEl) dateEl.textContent = `${data.date} ${data.time}`.trim();
    if (mottoEl) mottoEl.textContent = data.event;
    if (locEl) locEl.textContent = data.location;

    // dressEl already has a default text in HTML; we keep it unless a custom 'details' is provided
    if (dressEl && data.details) {
      // If details are provided, append as an extra sentence.
      dressEl.textContent += ` — ${data.details}`;
    }
  }

  function openEnvelope() {
    const env = $("#envelope");
    const envWrap = $("#envelopeContainer");
    const letter = $("#letterContainer");
    if (!env || !envWrap || !letter) return;

    env.classList.add("opening");

    // After flap animation, hide envelope and show letter
    window.setTimeout(() => {
      envWrap.classList.add("hidden");
      letter.classList.add("show");
    }, 1100);
  }

  function init() {
    populate();

    const env = $("#envelope");
    if (env) {
      env.addEventListener("click", openEnvelope, { once: true });
      // Auto-open after the fly-in animation completes
      window.setTimeout(openEnvelope, 3200);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
