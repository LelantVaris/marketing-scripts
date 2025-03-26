# Web Marketing Scripts
A collection of lightweight, plug-and-play JavaScript utilities for marketing teams to enhance website analytics, user tracking, and conversion optimization.

## Overview
This repository contains simple, well-documented scripts that can be added to any website to improve marketing capabilities without requiring complex integrations or developer dependencies.

## Scripts

### Entry Path Tracker
`scripts/entry-path-tracker.js`

Tracks the initial landing page of visitors and appends it as a UTM parameter to conversion links.

**Use Case:** Understand which sections of your website drive conversions by tracking the entry point of users who eventually sign up.

**Installation:** [View installation instructions](#entry-path-tracker-1)

### Stat Counter Animation
`scripts/stat-counter-animation.js`

Animates numeric values in elements with the `data-stat` attribute, counting up from zero while preserving any non-numeric characters.

**Use Case:** Create engaging, attention-grabbing statistics that animate when they come into view, improving user engagement with important metrics.

**Installation:** [View installation instructions](#stat-counter-animation-1)

## Installation Instructions

### Entry Path Tracker
1. Add the following script to your website's `<head>` or before the closing `</body>` tag:
```html
<script src="https://cdn.jsdelivr.net/gh/[lelantvaris]/web-marketing-scripts@main/scripts/entry-path-tracker.min.js"></script>
```
Or copy the full script directly into your website's custom code section.

2. Customize the script by changing `https://domain.com/signup` to match your own signup URL.

### Stat Counter Animation
1. Add the following script to your website's `<head>` or before the closing `</body>` tag:
```html
<script src="https://cdn.jsdelivr.net/gh/[lelantvaris]/web-marketing-scripts@main/scripts/stat-counter-animation.min.js"></script>
```

2. Add the `data-stat` attribute to any elements containing numbers you want to animate:
```html
<span data-stat>1500</span>
<p data-stat>Sales increased by 75%</p>
<div data-stat>$299.99</div>
```

3. The animation will automatically run when the page loads, counting from 0 to the final value while preserving any non-numeric characters.

## Customization
Each script includes detailed comments to help with customization. General customization options:
- Modify target URLs for tracking
- Adjust parameter names
- Change localStorage keys
- Add additional parameters
- For stat counters, adjust animation duration and frame rate

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-script`)
3. Commit your changes (`git commit -m 'Add a new marketing script'`)
4. Push to the branch (`git push origin feature/amazing-script`)
5. Open a Pull Request

## License
MIT License - feel free to use, modify and distribute as needed.
