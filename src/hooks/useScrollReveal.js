import { useEffect } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to all .reveal elements
 * and adds the .visible class when they enter the viewport.
 * Call this once in PublicSite or a top-level component.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, stop observing to save memory
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,       // trigger when 12% of the element is visible
        rootMargin: '0px 0px -40px 0px', // slight bottom offset for natural feel
      }
    );

    // Observe all .reveal elements already in DOM
    const attachObserver = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    };

    attachObserver();

    // Also observe elements that may be added after (e.g. after CMS re-render)
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
