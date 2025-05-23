// This script automatically closes the menu when the user clicks on an anchor link in Webflow. Add this to the footer. 
<script> $('.w-nav-menu').on('click', 'a', function() { $('.w-nav-button').triggerHandler('tap'); }); </script>
