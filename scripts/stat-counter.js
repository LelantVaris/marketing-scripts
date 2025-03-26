/**
 * Animates counter for elements with data-stat attribute
 * Preserves non-numeric characters in the final value
 */
document.addEventListener('DOMContentLoaded', () => {
  // Find all elements with data-stat attribute
  const statElements = document.querySelectorAll('[data-stat]');
  
  statElements.forEach(element => {
    // Get the final value and store it as original text
    const finalValue = element.textContent;
    const originalText = element.textContent;
    
    // Extract numeric portions
    const numericValue = parseFloat(finalValue.replace(/[^\d.-]/g, ''));
    
    // If there's no valid number, skip this element
    if (isNaN(numericValue)) return;
    
    // Create a pattern to identify where the number is in the text
    const numberPattern = /(\D*)(-?\d+\.?\d*)(\D*)/;
    const matches = originalText.match(numberPattern);
    
    if (!matches) return;
    
    const [_, prefix, _, suffix] = matches;
    
    // Animation parameters
    const duration = 1500; // milliseconds
    const frameRate = 60;
    const increment = numericValue / (duration / 1000 * frameRate);
    let currentValue = 0;
    
    // Start the animation
    const counter = setInterval(() => {
      currentValue += increment;
      
      // Check if we've reached the final value
      if (currentValue >= numericValue) {
        clearInterval(counter);
        element.textContent = originalText;
        return;
      }
      
      // Format the current value based on the original
      const formattedValue = formatNumber(currentValue, originalText);
      element.textContent = prefix + formattedValue + suffix;
    }, 1000 / frameRate);
  });
});

/**
 * Formats a number to match the pattern of the original text
 * @param {number} value - Current numeric value
 * @param {string} originalText - Original text with final value
 * @returns {string} - Formatted number
 */
function formatNumber(value, originalText) {
  // Check if the original has decimals
  if (originalText.includes('.')) {
    const decimalPlaces = originalText.split('.')[1].replace(/[^\d]/g, '').length;
    return value.toFixed(decimalPlaces);
  }
  
  // If it's a whole number, round and return
  return Math.round(value).toString();
}
