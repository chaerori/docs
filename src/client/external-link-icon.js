// Add external link icon to specific sidebar items
(function() {
  function addExternalLinkIcons() {
    // Find all menu links
    const menuLinks = document.querySelectorAll('.menu__link');
    
    menuLinks.forEach(link => {
      const href = link.getAttribute('href');
      const text = link.textContent?.trim();
      
      // Add external icon for specific pages
      if (text === 'Kollus VOD Console로 이동하기' || 
          text === 'Get your keys' ||
          href?.includes('/live-video/get-started')) {
        link.setAttribute('data-external', 'true');
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addExternalLinkIcons);
  } else {
    addExternalLinkIcons();
  }

  // Also run when navigation changes (for SPA behavior)
  const observer = new MutationObserver(() => {
    addExternalLinkIcons();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
