document.addEventListener('DOMContentLoaded', () => {
  // Select elements that have the "data-stat" attribute.
  const statElements = document.querySelectorAll('[data-stat]');

  statElements.forEach(el => {
    // Get the final text from the element.
    const finalText = el.textContent.trim();
    // Regex breakdown:
    //   ^([^0-9]*)   -> Capture any non-digit characters at the start (prefix)
    //   (\d+(?:\.\d+)?) -> Capture the number (supports decimals)
    //   ([^0-9]*)$   -> Capture any non-digit characters at the end (suffix)
    const regex = /^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/;
    const matches = finalText.match(regex);

    if (matches) {
      const prefix = matches[1];
      const numberValue = parseFloat(matches[2]);
      const suffix = matches[3];
      const duration = 2000; // Animation duration in milliseconds
      let startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        // Calculate the current value based on progress.
        let currentValue = Math.min(numberValue, (progress / duration) * numberValue);

        // If the original number was an integer, show integers during the count.
        if (Number.isInteger(numberValue)) {
          currentValue = Math.floor(currentValue);
        } else {
          // Optionally, you can round to a fixed number of decimal places.
          currentValue = currentValue.toFixed(1);
        }

        // Update the element's text content.
        el.textContent = `${prefix}${currentValue}${suffix}`;

        if (progress < duration) {
          window.requestAnimationFrame(animate);
        } else {
          // Ensure the final value is set exactly.
          el.textContent = `${prefix}${numberValue}${suffix}`;
        }
      }

      window.requestAnimationFrame(animate);
    }
  });
});
