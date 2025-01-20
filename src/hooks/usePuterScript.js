import { useEffect } from 'react';

const usePuterScript = () => {
  useEffect(() => {
    // Check if the script is already present
    if (!document.querySelector('script[src="https://js.puter.com/v2/"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.puter.com/v2/';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up script when component unmounts
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);
};

export default usePuterScript;
