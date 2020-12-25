export namespace localStorage {
    function set(key: any, value: any): any;
    function get(key: any, defaultValue?: any): any;
    function setObject(key: any, value: any): any;
    function getObject(key: any, defaultValue?: any): any;
    function clear(): boolean | void;
    function remove(key: any): boolean | void;
}
export namespace sessionStorage {
    export function set_1(key: any, value: any): any;
    export { set_1 as set };
    export function get_1(key: any, defaultValue?: any): any;
    export { get_1 as get };
    export function setObject_1(key: any, value: any): any;
    export { setObject_1 as setObject };
    export function getObject_1(key: any, defaultValue?: any): any;
    export { getObject_1 as getObject };
    export function clear_1(): boolean | void;
    export { clear_1 as clear };
    export function remove_1(key: any): boolean | void;
    export { remove_1 as remove };
}
