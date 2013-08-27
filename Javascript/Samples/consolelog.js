// http://habrahabr.ru/post/114483/
function consoleLog() {
    if (console) {
        var log = function (e) {
        };
        if (console.log) log = function (e) {
            console.log(e);
        };
        var dir = function (e) {
            log(e);
        };
        if (console.dir) dir = function (e) {
            console.dir(e);
        };
        var dirxml = function (e) {
            dir(e);
        };
        if (console.dirxml) dirxml = function (e) {
            console.dirxml(e);
        };

        for (var key in arguments) {
            var item = arguments[key];
            if (item instanceof HTMLElement) {
                dirxml(item);
            }
            else if (typeof item === 'object') {
                dir(item);
            }
            else {
                log(item);
            }
        }
    }
}
