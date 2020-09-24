const localStorage = {
    set: function (key: string, value: string) {
        window.localStorage[key] = value;
        return window.localStorage[key];
    },
    get: function (key: string, defaultValue?: any) {
        return window.localStorage[key] || defaultValue;
    },
    setObject: function (key: string, value: object) {
        window.localStorage[key] = JSON.stringify(value);
        return window.localStorage[key];
    },
    getObject: function (key: string, defaultValue?: any) {
        return JSON.parse(window.localStorage[key] || defaultValue || '{}');
    },
    clear: function () {
        return window.localStorage.clear();
    },
    remove: function (key: string) {
        return window.localStorage.removeItem(key);
    }
};

const sessionStorage = {
    set: function (key: string, value: string) {
        window.sessionStorage[key] = value;
        return window.sessionStorage[key];
    },
    get: function (key: string, defaultValue?: any) {
        return window.sessionStorage[key] || defaultValue;
    },
    setObject: function (key: string, value: any) {
        window.sessionStorage[key] = JSON.stringify(value);
        return window.sessionStorage[key];
    },
    getObject: function (key: string, defaultValue?: any) {
        return JSON.parse(window.sessionStorage[key] || defaultValue || '{}');
    },
    clear: function () {
        return window.sessionStorage.clear();
    },
    remove: function (key: string) {
        return window.sessionStorage.removeItem(key);
    }
};

export {
    localStorage, sessionStorage
}