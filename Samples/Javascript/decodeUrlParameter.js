function getParam(paramName) {
    var urlParamEncoded = getUrlParam(paramName);
    var urlParam;
    try {
        urlParam = decodeURIComponent((urlParamEncoded + '').replace(/\+/g, '%20'));
    }
    catch (e) {
        urlParam = unescape((urlParamEncoded + '').replace(/\+/g, ' '));
    }
    return urlParam;
}