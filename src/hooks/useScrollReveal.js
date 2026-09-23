import { useEffect } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to all .reveal elements
 * and adds the .visible class when they enter the viewport.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // Immediately reveal elements already in or near viewport on mount
    const checkInitialVisibility = () => {
      const windowHeight = window.innerHeight;
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // trigger when 5% is visible
        rootMargin: '50px 0px 50px 0px', // trigger smoothly before entering
      }
    );

    const attachObserver = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    };

    attachObserver();
    checkInitialVisibility();

    // Also observe dynamically loaded elements
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
