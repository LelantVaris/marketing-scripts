// Entry Path Tracker Script
document.addEventListener('DOMContentLoaded', function() {
  // Step 1: Save the entry path when a user first lands on the site
  const saveEntryPath = () => {
    // Check if this is the first page view in this session
    if (!localStorage.getItem('initialEntryPath')) {
      // Get the current path (slug)
      const entryPath = window.location.pathname;
      // Save it to localStorage
      localStorage.setItem('initialEntryPath', entryPath);
      console.log('Entry path saved:', entryPath);
    }
  };
  
  // Step 2: Modify all links to chat.lindy.ai/signup to include the UTM parameter
  const modifySignupLinks = () => {
    // Get all links on the page
    const allLinks = document.querySelectorAll('a');
    
    // Get the saved entry path
    const entryPath = localStorage.getItem('initialEntryPath') || '/';
    
    // Loop through all links
    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      // Check if the link is to the signup page
      if (href && href.includes('https://chat.lindy.ai/signup')) {
        // Prepare the UTM parameter
        // Remove leading slash and encode the path
        const cleanPath = entryPath.replace(/^\//, '');
        const utmSource = cleanPath || 'homepage';
        
        // Append the UTM parameter
        const separator = href.includes('?') ? '&' : '?';
        const newHref = `${href}${separator}utm_source=${encodeURIComponent(utmSource)}`;
        
        // Update the link
        link.setAttribute('href', newHref);
        console.log('Modified signup link:', newHref);
      }
    });
  };
  
  // Run the functions
  saveEntryPath();
  modifySignupLinks();
  
  // If your site uses AJAX for navigation (like single-page apps), 
  // you might need to run modifySignupLinks() when new content is loaded
  // This is a simplified example, you might need to modify based on your site's behavior
});
