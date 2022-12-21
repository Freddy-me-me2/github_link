// ==UserScript==
// @name         GitHub Link
// @version      0.1
// @description  Open in a separate tab when you step on a link on GitHub
// @author       Freddy-me-me2
// @match       https://*.github.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    try {
        const elements = document.getElementsByTagName('a');
        for (const element of elements) {
            element.setAttribute('target', '_blank');
            element.setAttribute('rel', 'noopener noreferrer');
        };
    } catch (error){
        alert(error);
    }
})();