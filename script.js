(function () {
    const qs = new URLSearchParams(window.location.search);

    // Map URL params to fields with sensible defaults
    const name = qs.get("name") || "Hexe/Zauberer";

    function populate() {
        // Text placeholders in the letter
        const nameEl = document.querySelector("#recipientName");

        if (nameEl) nameEl.textContent = name;
    }

    function openEnvelope() {
        const env = document.querySelector("#envelope");
        const envWrap = document.querySelector("#envelopeContainer");
        const letter = document.querySelector("#letterContainer");
        if (!env || !envWrap || !letter) return;

        env.classList.add("opening");

        // After flap animation, hide envelope and show letter
        window.setTimeout(() => {
            envWrap.classList.add("hidden");
            letter.classList.add("show");
        }, 1100);
    }

    (function () {
        const bg = document.querySelector('.background');
        const STAR_COUNT = 100;
        for (let i = 0; i < STAR_COUNT; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.background = 'white';
            star.style.borderRadius = '50%';
            star.style.opacity = Math.random() * 0.7 + 0.3;
            star.style.boxShadow = `0 0 ${size * 4}px ${size / 2}px #fff8`;
            bg.appendChild(star);
        }
    })();

    function init() {
        populate();

        const env = document.querySelector("#envelope");
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
