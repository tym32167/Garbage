function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            try {
                oldonload();
            }
            catch (ex) {
            }
            func();
        }
    }
}

addLoadEvent(function () { });