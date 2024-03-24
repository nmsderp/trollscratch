// ==UserScript==
// @name         Troll Scratch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  troll scratch heheahfdhg
// @author       nmsderp
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('a[aria-label="Scratch"]').forEach(function(element) {
        element.outerHTML = '<img src="https://f8n-production.s3.amazonaws.com/creators/profile/0ycfzy2tz-trollface-non-free-png-p08h3v.png" alt="troll" style="width:100px;height:30px;">';
    });
    document.querySelectorAll('span.scratch').forEach(function(element) {
        element.outerHTML = '<img src="https://f8n-production.s3.amazonaws.com/creators/profile/0ycfzy2tz-trollface-non-free-png-p08h3v.png" alt="troll" style="width:100px;height:30px;">';
    });
})();
