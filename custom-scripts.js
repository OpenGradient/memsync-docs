// Custom scripts for MemSync documentation
(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    function addClickHandlers() {
        // Handle Dashboard link clicks
        const dashboardLinks = document.querySelectorAll('a[href="javascript:void(0)"]');
        dashboardLinks.forEach(link => {
            if (link.textContent.trim() === 'Dashboard') {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showComingSoonPopup('Dashboard');
                });
            }
        });
        
        // Handle GitHub link clicks (in global anchors)
        const githubLinks = document.querySelectorAll('a[href="javascript:void(0)"]');
        githubLinks.forEach(link => {
            // Check if this is a GitHub link by looking for GitHub icon or text
            const hasGithubIcon = link.querySelector('svg') || link.innerHTML.includes('github') || link.textContent.includes('GitHub');
            if (hasGithubIcon && link.textContent.trim() === 'GitHub') {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showComingSoonPopup('GitHub');
                });
            }
        });
    }
    
    // Show "Coming Soon" popup
    function showComingSoonPopup(feature) {
        // Create popup overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease-out;
        `;
        
        // Create popup content
        const popup = document.createElement('div');
        popup.style.cssText = `
            background: white;
            border-radius: 12px;
            padding: 32px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add content
        popup.innerHTML = `
            <div style="margin-bottom: 20px;">
                <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #0EA5E9; margin: 0 auto;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 600; color: #1f2937;">${feature} Coming Soon!</h3>
            <p style="margin: 0 0 24px 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                We're working hard to bring you the ${feature.toLowerCase()} experience. Stay tuned for updates!
            </p>
            <button id="close-popup" style="
                background: #0EA5E9;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.2s;
            ">Got it!</button>
        `;
        
        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { 
                    opacity: 0;
                    transform: translateY(-20px) scale(0.95);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
        
        // Assemble popup
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        
        // Add close functionality
        const closeBtn = popup.querySelector('#close-popup');
        function closePopup() {
            overlay.style.animation = 'fadeIn 0.2s ease-out reverse';
            setTimeout(() => {
                document.body.removeChild(overlay);
                document.head.removeChild(style);
            }, 200);
        }
        
        closeBtn.addEventListener('click', closePopup);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closePopup();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePopup();
            }
        }, { once: true });
        
        // Hover effect for button
        closeBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#0284C7';
        });
        closeBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#0EA5E9';
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addClickHandlers);
    } else {
        addClickHandlers();
    }
    
    // Also re-initialize after navigation changes (for SPA behavior)
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(addClickHandlers, 100);
        }
    }).observe(document, { subtree: true, childList: true });
    
})(); 