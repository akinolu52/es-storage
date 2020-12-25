const localStorage = {
    set: function (key, value) {
        window.localStorage[key] = value;
        return window.localStorage[key];
    },
    get: function (key, defaultValue= null) {
        return window.localStorage[key] || defaultValue;
    },
    setObject: function (key, value) {
        window.localStorage[key] = JSON.stringify(value);
        return window.localStorage[key];
    },
    getObject: function (key, defaultValue= null) {
        return JSON.parse(window.localStorage[key] || defaultValue || '{}');
    },
    clear: function () {
        return window.localStorage.clear();
    },
    remove: function (key) {
        return window.localStorage.removeItem(key);
    }
};

const sessionStorage = {
    set: function (key, value) {
        window.sessionStorage[key] = value;
        return window.sessionStorage[key];
    },
    get: function (key, defaultValue= null) {
        return window.sessionStorage[key] || defaultValue;
    },
    setObject: function (key, value) {
        window.sessionStorage[key] = JSON.stringify(value);
        return window.sessionStorage[key];
    },
    getObject: function (key, defaultValue= null) {
        return JSON.parse(window.sessionStorage[key] || defaultValue || '{}');
    },
    clear: function () {
        return window.sessionStorage.clear();
    },
    remove: function (key) {
        return window.sessionStorage.removeItem(key);
    }
};

export {
    localStorage, sessionStorage
}