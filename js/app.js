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
    function AJAX_AJAX(url, {method = "GET", body, answers}) {
        function XHR() {
            return new Promise(((resolve, reject) => {
                let xhr;
                let form = new FormData;
                if (window.XMLHttpRequest) xhr = new XMLHttpRequest; else if (window.ActiveXObject) xhr = new ActiveXObject("Microsoft.XMLHTTP");
                if ("PUT" === method.toLocaleUpperCase() || "PATCH" === method.toLocaleUpperCase() || "POST" === method.toLocaleUpperCase()) form.append("data", JSON.stringify(body));
                xhr.responseType = "json";
                xhr.open(method.toLocaleUpperCase(), url);
                xhr.onreadystatechange = () => {
                    answers({
                        readyState: xhr.readyState,
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                    if (4 == xhr.readyState && xhr.status >= 200 && xhr.status <= 299) resolve(xhr.response); else if (4 == xhr.readyState && xhr.status >= 400) reject({
                        errorResponse: xhr.response
                    });
                };
                xhr.send(JSON.stringify(body));
            }));
        }
        return XHR();
    }
    function splitSearch(search) {
        const arrSeacrh = search.split(/[\?\=]/g);
        return arrSeacrh.filter((search => search));
    }
    function createObjectSearch(search) {
        const arrSeacrh = splitSearch(search), objectResult = {};
        console.log(arrSeacrh);
        for (let i = 0; i < arrSeacrh.length; i++) {
            const item = arrSeacrh[i], prevItem = arrSeacrh[i - 1];
            if (!(i % 2)) objectResult[item] = ""; else objectResult[prevItem] = item;
        }
        return objectResult;
    }
    function showResult({search}, AJAX) {
        createObjectSearch(search);
    }
    window.addEventListener("DOMContentLoaded", (function(e) {
        const spollersBody = document.querySelector(".information__container");
        spollersBody.addEventListener("click", (function(e) {
            const target = e.target;
            if (target.matches(".spollers__btn-ibg_info")) {
                const details = target.parentElement.parentElement.parentElement;
                if (!details.getAttribute("open")) details.setAttribute("open", true); else details.removeAttribute("open");
            }
        }));
        showResult(location, AJAX_AJAX);
    }));
    window["FLS"] = true;
    isWebp();
})();