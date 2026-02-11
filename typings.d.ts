declare module 'react';
declare module 'react-dom';
declare module 'react-dom/client';
declare module 'react/jsx-runtime';
declare module 'react-router-dom';
declare module 'react-helmet-async';
declare module '@iconify/react';
declare module 'puppeteer';

// Global namespace for React to support JSX
declare namespace React {
    // Allow any prop on any element
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        [key: string]: any;
    }
}
