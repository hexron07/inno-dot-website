// Development environment configuration
// This file helps resolve React DevTools connection issues

(function() {
  'use strict';
  
  // Only run in development
  if (process.env.NODE_ENV === 'development') {
    // Initialize React DevTools hook if not present
    if (typeof window !== 'undefined' && !window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
        supportsFiber: true,
        inject: function() {},
        onCommitFiberRoot: function() {},
        onCommitFiberUnmount: function() {},
        isDisabled: false,
      };
    }
    
    // Suppress React DevTools warnings in development
    const originalConsoleWarn = console.warn;
    console.warn = function(...args) {
      if (args[0] && typeof args[0] === 'string') {
        // Filter out React DevTools related warnings
        if (args[0].includes('React DevTools') || 
            args[0].includes('__REACT_DEVTOOLS_GLOBAL_HOOK__') ||
            args[0].includes('React Developer Tools')) {
          return;
        }
      }
      originalConsoleWarn.apply(console, args);
    };
    
    const originalConsoleError = console.error;
    console.error = function(...args) {
      if (args[0] && typeof args[0] === 'string') {
        // Filter out React DevTools related errors
        if (args[0].includes('React DevTools') || 
            args[0].includes('__REACT_DEVTOOLS_GLOBAL_HOOK__') ||
            args[0].includes('React Developer Tools')) {
          return;
        }
      }
      originalConsoleError.apply(console, args);
    };
    
    console.log('✅ Development environment configured');
    console.log('📱 React DevTools hook initialized');
  }
})();