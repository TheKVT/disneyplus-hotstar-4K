// ==UserScript==
// @name         4K DSNP HS
// @namespace   thekvt#6900 (Discord)
// @version     1.0
// @author      TheKVT
// @match        https://www.hotstar.com/*
// @match        https://www.disneyplus.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Modifies the resolution in the applications
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url === "https://disney.playback.edge.bamgrid.com/v7/playback/ctr-regular") {
            arguments[1] = "https://disney.playback.edge.bamgrid.com/v7/playback/tv-drm-ctr-h265-hdr10-atmos";
            const originalSend = XMLHttpRequest.prototype.send;
            this.send = function(data) {
                if (data.includes("1280x720")) {
                    data = data.replace("1280x720", "3840x2160"); // replace's the resolution
                }
                originalSend.call(this, data);
            };
        }
        originalOpen.apply(this, arguments);
    };
})();
