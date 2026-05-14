import { useEffect } from "react";

export default function ScrollToTop() {
    useEffect(() => {
        // Method 1: Standard scroll
        window.scrollTo(0, 0);

        // Method 2: Also set both html and body to 0
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Method 3: Small delay to fight browser restore
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 10);

        return () => clearTimeout(timeoutId);
    }, []);

    return null;
}