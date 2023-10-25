(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AUTHORITY = exports.TENANT_ID = exports.CLIENT_ID = void 0;
    exports.CLIENT_ID = '9ec52326-5f04-45be-b0f3-885e63eba095';
    exports.TENANT_ID = '01ccac41-7686-471a-a423-083da2b39887';
    exports.AUTHORITY = "https://login.microsoftonline.com/".concat(exports.TENANT_ID, "/v2.0/.well-known/openid-configuration");
});
//# sourceMappingURL=Secret.js.map