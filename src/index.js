const checkIfStorageIsAvailable = type => {
    try {
        const storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        console.log('error -> ', e);
        return false;
    }
}

const sessionStorageCheck = checkIfStorageIsAvailable('sessionStorage');
const localStorageCheck = checkIfStorageIsAvailable('localStorage');

const localStorage = {
    set: function (key, value) {
        if (localStorageCheck) {
            window.localStorage[key] = value;
            return window.localStorage[key];
        } else {
            return localStorageCheck;
        }
    },
    get: function (key, defaultValue = null) {
        if (localStorageCheck) {
            return window.localStorage[key] || defaultValue;
        } else {
            return localStorageCheck;
        }
    },
    setObject: function (key, value) {
        if (localStorageCheck) {
            window.localStorage[key] = JSON.stringify(value);
            return window.localStorage[key];
        } else {
            return localStorageCheck;
        }
    },
    getObject: function (key, defaultValue = null) {
        if (localStorageCheck) {
            return JSON.parse(window.localStorage[key] || defaultValue || '{}');

        } else {
            return localStorageCheck;
        }
    },
    clear: function () {
        if (localStorageCheck) {
            return window.localStorage.clear();
        } else {
            return localStorageCheck;
        }
    },
    remove: function (key) {
        if (localStorageCheck) {
            return window.localStorage.removeItem(key);
        } else {
            return localStorageCheck;
        }
    }
};

const sessionStorage = {
    set: function (key, value) {
        if (sessionStorageCheck) {
            window.sessionStorage[key] = value;
            return window.sessionStorage[key];
        } else {
            return sessionStorageCheck;
        }
    },
    get: function (key, defaultValue = null) {
        if (sessionStorageCheck) {
            return window.sessionStorage[key] || defaultValue;
        } else {
            return sessionStorageCheck;
        }
    },
    setObject: function (key, value) {
        if (sessionStorageCheck) {
            window.sessionStorage[key] = JSON.stringify(value);
            return window.sessionStorage[key];
        } else {
            return sessionStorageCheck;
        }
    },
    getObject: function (key, defaultValue = null) {
        if (sessionStorageCheck) {
            return JSON.parse(window.sessionStorage[key] || defaultValue || '{}');
        } else {
            return sessionStorageCheck;
        }
    },
    clear: function () {
        if (sessionStorageCheck) {
            return window.sessionStorage.clear();
        } else {
            return sessionStorageCheck;
        }
    },
    remove: function (key) {
        if (sessionStorageCheck) {
            return window.sessionStorage.removeItem(key);

        } else {
            return sessionStorageCheck;
        }
    }
};

export {
    localStorage, sessionStorage
}