(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window.addEventListener("DOMContentLoaded", (function(e) {
        document.addEventListener("click", (function(e) {
            const target = e.target;
            if (target.matches(".spollers__title")) {
                const titleHeight = target.offsetHeight;
                const contentHeight = target.nextElementSibling.offsetHeight;
                target.parentElement.style.cssText = `height: ${titleHeight} + ${contentHeight}px`;
            }
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();